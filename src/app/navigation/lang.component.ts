import { Component, OnInit, OnDestroy } from "@angular/core";
import { Locale } from "../models/lang";
import { LocaleService, DefaultLocale, Currency, Timezone, Language } from "angular-l10n";
import { DefaultLocaleCodes } from "angular-l10n/src/models/types";

const lang_map = {
    en: { shortcut: "en", name: "English", country: "UK" },
    ru: { shortcut: "ru", name: "русский", country: "RU" }
};

@Component({
    selector: "lang-selector",
    moduleId: module.id,
    templateUrl: "./lang.component.html"
})
export class LangComponent implements OnInit, OnDestroy {
    
    private working_langs: Locale[];
    private currentLang: Locale;

    @DefaultLocale() defaultLocale: string;
    @Language() defaultLanguage: string;
    @Currency() currency: string;
    @Timezone() timezone: string;

    constructor(private localeService: LocaleService){}

    ngOnInit(): void {
        this.working_langs = this.localeService.getConfiguration().languages
            .filter( lang => lang_map.hasOwnProperty(lang.code) )
            .map ( lang => new Locale(lang.code, lang_map[lang.code].country, lang_map[lang.code].shortcut, lang_map[lang.code].name));

        this.localeService.defaultLocaleChanged.subscribe ( locale => {
            this.currentLang = this.working_langs.find ( lang => {
                let currLoc = this.localeService.getCurrentLanguage();
                return lang.languageCode === currLoc;
            });
        })
    }
    ngOnDestroy(): void {}

    get langs(): Locale[] {
        return this.working_langs;
    }

    get current(): Locale {
        return this.currentLang;
    }
    set current(lang: Locale){
        this.currentLang = lang;    
        this.localeService.setDefaultLocale(lang.languageCode, lang.countryCode);
    }
}