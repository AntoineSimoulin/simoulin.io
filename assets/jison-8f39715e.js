import e from"./javascript-f16794a6.js";const n=Object.freeze({displayName:"Jison",fileTypes:["jison"],injections:{"L:(meta.action.jison - (comment | string)), source.js.embedded.jison - (comment | string), source.js.embedded.source - (comment | string.quoted.double | string.quoted.single)":{patterns:[{match:"\\${2}",name:"variable.language.semantic-value.jison"},{match:"@\\$",name:"variable.language.result-location.jison"},{match:"##\\$|\\byysp\\b",name:"variable.language.stack-index-0.jison"},{match:"#\\S+#",name:"support.variable.token-reference.jison"},{match:"#\\$",name:"variable.language.result-id.jison"},{match:"\\$(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)",name:"support.variable.token-value.jison"},{match:"@(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)",name:"support.variable.token-location.jison"},{match:"##(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)",name:"support.variable.stack-index.jison"},{match:"#(?:-?\\d+|[[:alpha:]_](?:[\\w-]*\\w)?)",name:"support.variable.token-id.jison"},{match:"\\byy(?:l(?:eng|ineno|oc|stack)|rulelength|s(?:tate|s?tack)|text|vstack)\\b",name:"variable.language.jison"},{match:"\\byy(?:clearin|erro[kr])\\b",name:"keyword.other.jison"}]}},name:"jison",patterns:[{begin:"%%",beginCaptures:{0:{name:"meta.separator.section.jison"}},end:"\\z",patterns:[{begin:"%%",beginCaptures:{0:{name:"meta.separator.section.jison"}},end:"\\z",patterns:[{begin:"\\G",contentName:"source.js.embedded.jison",end:"\\z",name:"meta.section.epilogue.jison",patterns:[{include:"#epilogue_section"}]}]},{begin:"\\G",end:"(?=%%)",name:"meta.section.rules.jison",patterns:[{include:"#rules_section"}]}]},{begin:"^",end:"(?=%%)",name:"meta.section.declarations.jison",patterns:[{include:"#declarations_section"}]}],repository:{actions:{patterns:[{begin:"\\{\\{",beginCaptures:{0:{name:"punctuation.definition.action.begin.jison"}},contentName:"source.js.embedded.jison",end:"\\}\\}",endCaptures:{0:{name:"punctuation.definition.action.end.jison"}},name:"meta.action.jison",patterns:[{include:"source.js"}]},{begin:"(?=%\\{)",end:"(?<=%\\})",name:"meta.action.jison",patterns:[{include:"#user_code_blocks"}]}]},comments:{patterns:[{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.jison"}},end:"$",name:"comment.line.double-slash.jison"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.jison"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.jison"}},name:"comment.block.jison"}]},declarations_section:{patterns:[{include:"#comments"},{begin:"^\\s*(%lex)\\s*$",beginCaptures:{1:{name:"entity.name.tag.lexer.begin.jison"}},end:"^\\s*(/lex)\\b",endCaptures:{1:{name:"entity.name.tag.lexer.end.jison"}},patterns:[{begin:"%%",beginCaptures:{0:{name:"meta.separator.section.jisonlex"}},end:"(?=/lex)",patterns:[{begin:"^%%",beginCaptures:{0:{name:"meta.separator.section.jisonlex"}},end:"(?=/lex)",patterns:[{begin:"\\G",contentName:"source.js.embedded.jisonlex",end:"(?=/lex)",name:"meta.section.user-code.jisonlex",patterns:[{include:"source.jisonlex#user_code_section"}]}]},{begin:"\\G",end:"^(?=%%|/lex)",name:"meta.section.rules.jisonlex",patterns:[{include:"source.jisonlex#rules_section"}]}]},{begin:"^",end:"(?=%%|/lex)",name:"meta.section.definitions.jisonlex",patterns:[{include:"source.jisonlex#definitions_section"}]}]},{begin:"(?=%\\{)",end:"(?<=%\\})",name:"meta.section.prologue.jison",patterns:[{include:"#user_code_blocks"}]},{include:"#options_declarations"},{match:"%(ebnf|left|nonassoc|parse-param|right|start)\\b",name:"keyword.other.declaration.$1.jison"},{include:"#include_declarations"},{begin:"%(code)\\b",beginCaptures:{0:{name:"keyword.other.declaration.$1.jison"}},end:"$",name:"meta.code.jison",patterns:[{include:"#comments"},{include:"#rule_actions"},{match:"(init|required)",name:"keyword.other.code-qualifier.$1.jison"},{include:"#quoted_strings"},{match:"\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b",name:"string.unquoted.jison"}]},{begin:"%(parser-type)\\b",beginCaptures:{0:{name:"keyword.other.declaration.$1.jison"}},end:"$",name:"meta.parser-type.jison",patterns:[{include:"#comments"},{include:"#quoted_strings"},{match:"\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b",name:"string.unquoted.jison"}]},{begin:"%(token)\\b",beginCaptures:{0:{name:"keyword.other.declaration.$1.jison"}},end:"$|(%%|;)",endCaptures:{1:{name:"punctuation.terminator.declaration.token.jison"}},name:"meta.token.jison",patterns:[{include:"#comments"},{include:"#numbers"},{include:"#quoted_strings"},{match:"<[[:alpha:]_](?:[\\w-]*\\w)?>",name:"invalid.unimplemented.jison"},{match:"\\S+",name:"entity.other.token.jison"}]},{match:"%(debug|import)\\b",name:"keyword.other.declaration.$1.jison"},{match:"%prec\\b",name:"invalid.illegal.jison"},{match:"%[[:alpha:]_](?:[\\w-]*\\w)?\\b",name:"invalid.unimplemented.jison"},{include:"#numbers"},{include:"#quoted_strings"}]},epilogue_section:{patterns:[{include:"#user_code_include_declarations"},{include:"source.js"}]},include_declarations:{patterns:[{begin:"(%(include))\\s*",beginCaptures:{1:{name:"keyword.other.declaration.$2.jison"}},end:`(?<=['"])|(?=\\s)`,name:"meta.include.jison",patterns:[{include:"#include_paths"}]}]},include_paths:{patterns:[{include:"#quoted_strings"},{begin:"(?=\\S)",end:"(?=\\s)",name:"string.unquoted.jison",patterns:[{include:"source.js#string_escapes"}]}]},numbers:{patterns:[{captures:{1:{name:"storage.type.number.jison"},2:{name:"constant.numeric.integer.hexadecimal.jison"}},match:"(0[Xx])([0-9A-Fa-f]+)"},{match:"\\d+",name:"constant.numeric.integer.decimal.jison"}]},options_declarations:{patterns:[{begin:"%options\\b",beginCaptures:{0:{name:"keyword.other.options.jison"}},end:"^(?=\\S|\\s*$)",name:"meta.options.jison",patterns:[{include:"#comments"},{match:"\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b",name:"entity.name.constant.jison"},{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.option.assignment.jison"}},end:`(?<=['"])|(?=\\s)`,patterns:[{include:"#comments"},{match:"\\b(true|false)\\b",name:"constant.language.boolean.$1.jison"},{include:"#numbers"},{include:"#quoted_strings"},{match:"\\S+",name:"string.unquoted.jison"}]},{include:"#quoted_strings"}]}]},quoted_strings:{patterns:[{begin:'"',end:'"',name:"string.quoted.double.jison",patterns:[{include:"source.js#string_escapes"}]},{begin:"'",end:"'",name:"string.quoted.single.jison",patterns:[{include:"source.js#string_escapes"}]}]},rule_actions:{patterns:[{include:"#actions"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.action.begin.jison"}},contentName:"source.js.embedded.jison",end:"\\}",endCaptures:{0:{name:"punctuation.definition.action.end.jison"}},name:"meta.action.jison",patterns:[{include:"source.js"}]},{include:"#include_declarations"},{begin:"->|→",beginCaptures:{0:{name:"punctuation.definition.action.arrow.jison"}},contentName:"source.js.embedded.jison",end:"$",name:"meta.action.jison",patterns:[{include:"source.js"}]}]},rules_section:{patterns:[{include:"#comments"},{include:"#actions"},{include:"#include_declarations"},{begin:"\\b[[:alpha:]_](?:[\\w-]*\\w)?\\b",beginCaptures:{0:{name:"entity.name.constant.rule-result.jison"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.jison"}},name:"meta.rule.jison",patterns:[{include:"#comments"},{begin:":",beginCaptures:{0:{name:"keyword.operator.rule-components.assignment.jison"}},end:"(?=;)",name:"meta.rule-components.jison",patterns:[{include:"#comments"},{include:"#quoted_strings"},{captures:{1:{name:"punctuation.definition.named-reference.begin.jison"},2:{name:"entity.name.other.reference.jison"},3:{name:"punctuation.definition.named-reference.end.jison"}},match:"(\\[)([[:alpha:]_](?:[\\w-]*\\w)?)(\\])"},{begin:"(%(prec))\\s*",beginCaptures:{1:{name:"keyword.other.$2.jison"}},end:`(?<=['"])|(?=\\s)`,name:"meta.prec.jison",patterns:[{include:"#comments"},{include:"#quoted_strings"},{begin:"(?=\\S)",end:"(?=\\s)",name:"constant.other.token.jison"}]},{match:"\\|",name:"keyword.operator.rule-components.separator.jison"},{match:"\\b(?:EOF|error)\\b",name:"keyword.other.$0.jison"},{match:"(?:%(?:e(?:mpty|psilon))|\\b[Ɛɛεϵ])\\b",name:"keyword.other.empty.jison"},{include:"#rule_actions"}]}]}]},user_code_blocks:{patterns:[{begin:"%\\{",beginCaptures:{0:{name:"punctuation.definition.user-code-block.begin.jison"}},contentName:"source.js.embedded.jison",end:"%\\}",endCaptures:{0:{name:"punctuation.definition.user-code-block.end.jison"}},name:"meta.user-code-block.jison",patterns:[{include:"source.js"}]}]},user_code_include_declarations:{patterns:[{begin:"^(%(include))\\s*",beginCaptures:{1:{name:"keyword.other.declaration.$2.jison"}},end:`(?<=['"])|(?=\\s)`,name:"meta.include.jison",patterns:[{include:"#include_paths"}]}]}},scopeName:"source.jison",embeddedLangs:["javascript"]});var i=[...e,n];export{i as default};
