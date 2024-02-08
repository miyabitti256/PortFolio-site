// コピｐ……参考元リンク https://codeseterpie.com/blog/e91oc4aaef58/
import hljs, { HighlightResult } from "highlight.js";
import { load } from "cheerio";
import { BlogContents } from "./client";

export function syntaxhighlight (data:BlogContents) {
        const $ = load(data.body);

        $("div[data-filename]").each((_, elm) => {
            $(elm).prepend(`<span>${$(elm).attr("data-filename")}</span>`);
        });
    
        $("pre code").each((_, elm) => {
            const language = $(elm).attr("class") || "";
            let result: HighlightResult;
    
            if (language == "") {
            result = hljs.highlightAuto($(elm).text());
            } else {
            result = hljs.highlight($(elm).text(), {
                language: language.replace("language-", ""),
            });
            }
            $(elm).html(result.value);
            $(elm).addClass("hljs");
        });
    
        data.body = $.html();
        return data;    
} 