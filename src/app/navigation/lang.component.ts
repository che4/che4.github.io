import { Component, OnInit } from "@angular/core";
import { Locale } from "../models/lang";
import { LocaleService } from "angular-l10n";

const lang_map = {
    en: { shortcut: "en", name: "English", country: "UK" },
    ru: { shortcut: "ru", name: "русский", country: "RU" }
};

@Component({
    selector: "lang-selector",
    moduleId: module.id,
    templateUrl: "./lang.component.html"
})
export class LangComponent implements OnInit {
    
    private working_langs: Locale[] = [];
    private currentLang: Locale;

    constructor(private localeService: LocaleService){}

    ngOnInit(){
        this.working_langs = this.localeService.getConfiguration().languages
            .filter( lang => lang_map.hasOwnProperty(lang.code))
            .map ( lang => new Locale(lang.code, lang_map[lang.code].country, lang_map[lang.code].shortcut, lang_map[lang.code].name));
        this.currentLang = this.working_langs
            .find ( lang => lang.languageCode === this.localeService.getCurrentLanguage());
    }

    get langs():Locale[]{
        return this.working_langs;
    }

    get current():Locale{
        return this.currentLang;
    }
    set current(lang: Locale){
        this.currentLang = lang;    
        this.localeService.setDefaultLocale(lang.languageCode, lang.countryCode);
    }
}