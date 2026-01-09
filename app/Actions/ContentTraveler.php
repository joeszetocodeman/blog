<?php

namespace App\Actions;

use Phiki\Grammar\Grammar;
use Phiki\Phiki;
use Phiki\Theme\Theme;

class ContentTraveler
{
    protected Phiki $phiki;
    protected int $matchIndex = 0;

    protected array $matchCodes = [];

    public function __construct()
    {
        $this->phiki = new Phiki();
    }

    public function handle(string $content): string
    {
        $content = str_replace("\n```", "```", $content);
        $content = preg_replace_callback(
//            '/```(.*?)\n?(.*?)```/s',
            '/<code\s?(.*?)>(.*?)<\/code>/s',
            function ($matches) use (&$content) {
                $langClass = $matches[1];
                $lang = str($langClass)->after('class="language-')->before('"')->toString() ?: 'php';
                $code = $matches[2];
                $code = htmlspecialchars_decode($code);
                $code = trim($code);

                $grammar = $this->mapLanguageToGrammar($lang);

                $highlightedCode = $this->phiki->codeToHtml(
                    code: $code,
                    grammar: $grammar,
                    theme: Theme::CatppuccinFrappe,
                )->withGutter();

                return $highlightedCode->toString();
            },
            $content
        );

        return str()->markdown($content);

//        foreach ($this->matchCodes as $index => $code) {
//            $content = str_replace('__@@_'.($index + 1).'_@@__', $code, $content);
//        }
//        return $content;
    }

    protected function mapLanguageToGrammar(string $language): Grammar
    {
        $language = strtolower(trim($language));

        return match ($language) {
            'php' => Grammar::Php,
            'javascript', 'js' => Grammar::Javascript,
            'typescript', 'ts' => Grammar::Typescript,
            'html' => Grammar::Html,
            'css' => Grammar::Css,
            'json' => Grammar::Json,
            'sql' => Grammar::Sql,
            'bash', 'shell', 'sh' => Grammar::Shellscript,
            'python', 'py' => Grammar::Python,
            'java' => Grammar::Java,
            'cpp', 'c++' => Grammar::Cpp,
            'c' => Grammar::C,
            'ruby', 'rb' => Grammar::Ruby,
            'rust', 'rs' => Grammar::Rust,
            'go' => Grammar::Go,
            'xml' => Grammar::Xml,
            'yaml', 'yml' => Grammar::Yaml,
            'markdown', 'md' => Grammar::Markdown,
            'jsx' => Grammar::Jsx,
            'tsx' => Grammar::Tsx,
            'vue' => Grammar::Vue,
            default => Grammar::Txt, // Default to plain text
        };
    }
}
