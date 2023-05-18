var languages = {
  "Markdown": {
    "type": "prose",
    "color": "#083fa1",
    "aliases": [
      "pandoc"
    ],
    "aceMode": "markdown",
    "codemirrorMode": "gfm",
    "codemirrorMimeType": "text/x-gfm",
    "wrap": true,
    "extensions": [
      ".md",
      ".markdown",
      ".mdown",
      ".mdwn",
      ".mdx",
      ".mkd",
      ".mkdn",
      ".mkdown",
      ".ronn",
      ".scd",
      ".workbook"
    ],
    "filenames": [
      "contents.lr"
    ],
    "tmScope": "source.gfm",
    "languageId": 222
  },
  "1C Enterprise": {
    "type": "programming",
    "color": "#814CCC",
    "extensions": [
      ".bsl",
      ".os"
    ],
    "tmScope": "source.bsl",
    "aceMode": "text",
    "languageId": 0
  },
  "4D": {
    "type": "programming",
    "color": "#004289",
    "extensions": [
      ".4dm"
    ],
    "tmScope": "source.4dm",
    "aceMode": "text",
    "languageId": 577529595
  },
  "ABAP": {
    "type": "programming",
    "color": "#E8274B",
    "extensions": [
      ".abap"
    ],
    "tmScope": "source.abap",
    "aceMode": "abap",
    "languageId": 1
  },
  "ABAP CDS": {
    "type": "programming",
    "color": "#555e25",
    "extensions": [
      ".asddls"
    ],
    "tmScope": "source.abapcds",
    "languageId": 452681853,
    "aceMode": "text"
  },
  "ABNF": {
    "type": "data",
    "aceMode": "text",
    "extensions": [
      ".abnf"
    ],
    "tmScope": "source.abnf",
    "languageId": 429
  },
  "AGS Script": {
    "type": "programming",
    "color": "#B9D9FF",
    "aliases": [
      "ags"
    ],
    "extensions": [
      ".asc",
      ".ash"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 2
  },
  "AIDL": {
    "type": "programming",
    "color": "#34EB6B",
    "tmScope": "source.aidl",
    "extensions": [
      ".aidl"
    ],
    "aceMode": "text",
    "interpreters": [
      "aidl"
    ],
    "languageId": 451700185
  },
  "AL": {
    "type": "programming",
    "color": "#3AA2B5",
    "extensions": [
      ".al"
    ],
    "tmScope": "source.al",
    "aceMode": "text",
    "languageId": 658971832
  },
  "AMPL": {
    "type": "programming",
    "color": "#E6EFBB",
    "extensions": [
      ".ampl",
      ".mod"
    ],
    "tmScope": "source.ampl",
    "aceMode": "text",
    "languageId": 3
  },
  "ANTLR": {
    "type": "programming",
    "color": "#9DC3FF",
    "extensions": [
      ".g4"
    ],
    "tmScope": "source.antlr",
    "aceMode": "text",
    "languageId": 4
  },
  "API Blueprint": {
    "type": "markup",
    "color": "#2ACCA8",
    "aceMode": "markdown",
    "extensions": [
      ".apib"
    ],
    "tmScope": "text.html.markdown.source.gfm.apib",
    "languageId": 5
  },
  "APL": {
    "type": "programming",
    "color": "#5A8164",
    "extensions": [
      ".apl",
      ".dyalog"
    ],
    "interpreters": [
      "apl",
      "aplx",
      "dyalog"
    ],
    "tmScope": "source.apl",
    "aceMode": "text",
    "codemirrorMode": "apl",
    "codemirrorMimeType": "text/apl",
    "languageId": 6
  },
  "ASL": {
    "type": "programming",
    "aceMode": "text",
    "extensions": [
      ".asl",
      ".dsl"
    ],
    "tmScope": "source.asl",
    "languageId": 124996147
  },
  "ASN.1": {
    "type": "data",
    "extensions": [
      ".asn",
      ".asn1"
    ],
    "tmScope": "source.asn",
    "aceMode": "text",
    "codemirrorMode": "asn.1",
    "codemirrorMimeType": "text/x-ttcn-asn",
    "languageId": 7
  },
  "ASP.NET": {
    "type": "programming",
    "tmScope": "text.html.asp",
    "color": "#9400ff",
    "aliases": [
      "aspx",
      "aspx-vb"
    ],
    "extensions": [
      ".asax",
      ".ascx",
      ".ashx",
      ".asmx",
      ".aspx",
      ".axd"
    ],
    "aceMode": "text",
    "codemirrorMode": "htmlembedded",
    "codemirrorMimeType": "application/x-aspx",
    "languageId": 564186416
  },
  "ATS": {
    "type": "programming",
    "color": "#1ac620",
    "aliases": [
      "ats2"
    ],
    "extensions": [
      ".dats",
      ".hats",
      ".sats"
    ],
    "tmScope": "source.ats",
    "aceMode": "ocaml",
    "languageId": 9
  },
  "ActionScript": {
    "type": "programming",
    "tmScope": "source.actionscript.3",
    "color": "#882B0F",
    "aliases": [
      "actionscript 3",
      "actionscript3",
      "as3"
    ],
    "extensions": [
      ".as"
    ],
    "aceMode": "actionscript",
    "languageId": 10
  },
  "Ada": {
    "type": "programming",
    "color": "#02f88c",
    "extensions": [
      ".adb",
      ".ada",
      ".ads"
    ],
    "aliases": [
      "ada95",
      "ada2005"
    ],
    "tmScope": "source.ada",
    "aceMode": "ada",
    "languageId": 11
  },
  "Adobe Font Metrics": {
    "type": "data",
    "color": "#fa0f00",
    "tmScope": "source.afm",
    "extensions": [
      ".afm"
    ],
    "aliases": [
      "acfm",
      "adobe composite font metrics",
      "adobe multiple font metrics",
      "amfm"
    ],
    "aceMode": "text",
    "languageId": 147198098
  },
  "Agda": {
    "type": "programming",
    "color": "#315665",
    "extensions": [
      ".agda"
    ],
    "tmScope": "source.agda",
    "aceMode": "text",
    "languageId": 12
  },
  "Alloy": {
    "type": "programming",
    "color": "#64C800",
    "extensions": [
      ".als"
    ],
    "tmScope": "source.alloy",
    "aceMode": "text",
    "languageId": 13
  },
  "Alpine Abuild": {
    "type": "programming",
    "color": "#0D597F",
    "group": "Shell",
    "aliases": [
      "abuild",
      "apkbuild"
    ],
    "filenames": [
      "APKBUILD"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 14
  },
  "Altium Designer": {
    "type": "data",
    "color": "#A89663",
    "aliases": [
      "altium"
    ],
    "extensions": [
      ".OutJob",
      ".PcbDoc",
      ".PrjPCB",
      ".SchDoc"
    ],
    "tmScope": "source.ini",
    "aceMode": "ini",
    "languageId": 187772328
  },
  "AngelScript": {
    "type": "programming",
    "color": "#C7D7DC",
    "extensions": [
      ".as",
      ".angelscript"
    ],
    "tmScope": "source.angelscript",
    "aceMode": "text",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 389477596
  },
  "Ant Build System": {
    "type": "data",
    "color": "#A9157E",
    "tmScope": "text.xml.ant",
    "filenames": [
      "ant.xml",
      "build.xml"
    ],
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "application/xml",
    "languageId": 15
  },
  "ApacheConf": {
    "type": "data",
    "color": "#d12127",
    "aliases": [
      "aconf",
      "apache"
    ],
    "extensions": [
      ".apacheconf",
      ".vhost"
    ],
    "filenames": [
      ".htaccess",
      "apache2.conf",
      "httpd.conf"
    ],
    "tmScope": "source.apache-config",
    "aceMode": "apache_conf",
    "languageId": 16
  },
  "Apex": {
    "type": "programming",
    "color": "#1797c0",
    "extensions": [
      ".cls"
    ],
    "tmScope": "source.java",
    "aceMode": "java",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-java",
    "languageId": 17
  },
  "Apollo Guidance Computer": {
    "type": "programming",
    "color": "#0B3D91",
    "group": "Assembly",
    "extensions": [
      ".agc"
    ],
    "tmScope": "source.agc",
    "aceMode": "assembly_x86",
    "languageId": 18
  },
  "AppleScript": {
    "type": "programming",
    "aliases": [
      "osascript"
    ],
    "extensions": [
      ".applescript",
      ".scpt"
    ],
    "interpreters": [
      "osascript"
    ],
    "tmScope": "source.applescript",
    "aceMode": "applescript",
    "color": "#101F1F",
    "languageId": 19
  },
  "Arc": {
    "type": "programming",
    "color": "#aa2afe",
    "extensions": [
      ".arc"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 20
  },
  "AsciiDoc": {
    "type": "prose",
    "color": "#73a0c5",
    "aceMode": "asciidoc",
    "wrap": true,
    "extensions": [
      ".asciidoc",
      ".adoc",
      ".asc"
    ],
    "tmScope": "text.html.asciidoc",
    "languageId": 22
  },
  "AspectJ": {
    "type": "programming",
    "color": "#a957b0",
    "extensions": [
      ".aj"
    ],
    "tmScope": "source.aspectj",
    "aceMode": "text",
    "languageId": 23
  },
  "Assembly": {
    "type": "programming",
    "color": "#6E4C13",
    "aliases": [
      "asm",
      "nasm"
    ],
    "extensions": [
      ".asm",
      ".a51",
      ".i",
      ".inc",
      ".nasm"
    ],
    "tmScope": "source.assembly",
    "aceMode": "assembly_x86",
    "languageId": 24
  },
  "Astro": {
    "type": "markup",
    "color": "#ff5a03",
    "extensions": [
      ".astro"
    ],
    "tmScope": "text.html.astro",
    "aceMode": "html",
    "codemirrorMode": "jsx",
    "codemirrorMimeType": "text/jsx",
    "languageId": 578209015
  },
  "Asymptote": {
    "type": "programming",
    "color": "#ff0000",
    "extensions": [
      ".asy"
    ],
    "interpreters": [
      "asy"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-kotlin",
    "languageId": 591605007
  },
  "Augeas": {
    "type": "programming",
    "color": "#9CC134",
    "extensions": [
      ".aug"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 25
  },
  "AutoHotkey": {
    "type": "programming",
    "color": "#6594b9",
    "aliases": [
      "ahk"
    ],
    "extensions": [
      ".ahk",
      ".ahkl"
    ],
    "tmScope": "source.ahk",
    "aceMode": "autohotkey",
    "languageId": 26
  },
  "AutoIt": {
    "type": "programming",
    "color": "#1C3552",
    "aliases": [
      "au3",
      "AutoIt3",
      "AutoItScript"
    ],
    "extensions": [
      ".au3"
    ],
    "tmScope": "source.autoit",
    "aceMode": "autohotkey",
    "languageId": 27
  },
  "Avro IDL": {
    "type": "data",
    "color": "#0040FF",
    "extensions": [
      ".avdl"
    ],
    "tmScope": "source.avro",
    "aceMode": "text",
    "languageId": 785497837
  },
  "Awk": {
    "type": "programming",
    "color": "#c30e9b",
    "extensions": [
      ".awk",
      ".auk",
      ".gawk",
      ".mawk",
      ".nawk"
    ],
    "interpreters": [
      "awk",
      "gawk",
      "mawk",
      "nawk"
    ],
    "tmScope": "source.awk",
    "aceMode": "text",
    "languageId": 28
  },
  "BASIC": {
    "type": "programming",
    "extensions": [
      ".bas"
    ],
    "tmScope": "source.basic",
    "aceMode": "text",
    "color": "#ff0000",
    "languageId": 28923963
  },
  "Ballerina": {
    "type": "programming",
    "extensions": [
      ".bal"
    ],
    "tmScope": "source.ballerina",
    "aceMode": "text",
    "color": "#FF5000",
    "languageId": 720859680
  },
  "Batchfile": {
    "type": "programming",
    "aliases": [
      "bat",
      "batch",
      "dosbatch",
      "winbatch"
    ],
    "extensions": [
      ".bat",
      ".cmd"
    ],
    "tmScope": "source.batchfile",
    "aceMode": "batchfile",
    "color": "#C1F12E",
    "languageId": 29
  },
  "Beef": {
    "type": "programming",
    "color": "#a52f4e",
    "extensions": [
      ".bf"
    ],
    "tmScope": "source.cs",
    "aceMode": "csharp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csharp",
    "languageId": 545626333
  },
  "Befunge": {
    "type": "programming",
    "extensions": [
      ".befunge"
    ],
    "tmScope": "source.befunge",
    "aceMode": "text",
    "languageId": 30
  },
  "BibTeX": {
    "type": "markup",
    "color": "#778899",
    "group": "TeX",
    "extensions": [
      ".bib",
      ".bibtex"
    ],
    "tmScope": "text.bibtex",
    "aceMode": "tex",
    "codemirrorMode": "stex",
    "codemirrorMimeType": "text/x-stex",
    "languageId": 982188347
  },
  "Bicep": {
    "type": "programming",
    "color": "#519aba",
    "extensions": [
      ".bicep"
    ],
    "tmScope": "source.bicep",
    "aceMode": "text",
    "languageId": 321200902
  },
  "Bison": {
    "type": "programming",
    "color": "#6A463F",
    "group": "Yacc",
    "tmScope": "source.yacc",
    "extensions": [
      ".bison"
    ],
    "aceMode": "text",
    "languageId": 31
  },
  "BitBake": {
    "type": "programming",
    "color": "#00bce4",
    "tmScope": "none",
    "extensions": [
      ".bb"
    ],
    "aceMode": "text",
    "languageId": 32
  },
  "Blade": {
    "type": "markup",
    "color": "#f7523f",
    "extensions": [
      ".blade",
      ".blade.php"
    ],
    "tmScope": "text.html.php.blade",
    "aceMode": "text",
    "languageId": 33
  },
  "BlitzBasic": {
    "type": "programming",
    "color": "#00FFAE",
    "aliases": [
      "b3d",
      "blitz3d",
      "blitzplus",
      "bplus"
    ],
    "extensions": [
      ".bb",
      ".decls"
    ],
    "tmScope": "source.blitzmax",
    "aceMode": "text",
    "languageId": 34
  },
  "BlitzMax": {
    "type": "programming",
    "color": "#cd6400",
    "extensions": [
      ".bmx"
    ],
    "aliases": [
      "bmax"
    ],
    "tmScope": "source.blitzmax",
    "aceMode": "text",
    "languageId": 35
  },
  "Bluespec": {
    "type": "programming",
    "color": "#12223c",
    "extensions": [
      ".bsv"
    ],
    "tmScope": "source.bsv",
    "aceMode": "verilog",
    "languageId": 36
  },
  "Boo": {
    "type": "programming",
    "color": "#d4bec1",
    "extensions": [
      ".boo"
    ],
    "aceMode": "text",
    "tmScope": "source.boo",
    "languageId": 37
  },
  "Boogie": {
    "type": "programming",
    "color": "#c80fa0",
    "extensions": [
      ".bpl"
    ],
    "interpreters": [
      "boogie"
    ],
    "tmScope": "source.boogie",
    "aceMode": "text",
    "languageId": 955017407
  },
  "Brainfuck": {
    "type": "programming",
    "color": "#2F2530",
    "extensions": [
      ".b",
      ".bf"
    ],
    "tmScope": "source.bf",
    "aceMode": "text",
    "codemirrorMode": "brainfuck",
    "codemirrorMimeType": "text/x-brainfuck",
    "languageId": 38
  },
  "Brightscript": {
    "type": "programming",
    "color": "#662D91",
    "extensions": [
      ".brs"
    ],
    "tmScope": "source.brightscript",
    "aceMode": "text",
    "languageId": 39
  },
  "Browserslist": {
    "type": "data",
    "color": "#ffd539",
    "filenames": [
      ".browserslistrc",
      "browserslist"
    ],
    "tmScope": "text.browserslist",
    "aceMode": "text",
    "languageId": 153503348
  },
  "C": {
    "type": "programming",
    "color": "#555555",
    "extensions": [
      ".c",
      ".cats",
      ".h",
      ".idc"
    ],
    "interpreters": [
      "tcc"
    ],
    "tmScope": "source.c",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 41
  },
  "C#": {
    "type": "programming",
    "aceMode": "csharp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csharp",
    "tmScope": "source.cs",
    "color": "#178600",
    "aliases": [
      "csharp",
      "cake",
      "cakescript"
    ],
    "extensions": [
      ".cs",
      ".cake",
      ".csx",
      ".linq"
    ],
    "languageId": 42
  },
  "C++": {
    "type": "programming",
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "color": "#f34b7d",
    "aliases": [
      "cpp"
    ],
    "extensions": [
      ".cpp",
      ".c++",
      ".cc",
      ".cp",
      ".cxx",
      ".h",
      ".h++",
      ".hh",
      ".hpp",
      ".hxx",
      ".inc",
      ".inl",
      ".ino",
      ".ipp",
      ".re",
      ".tcc",
      ".tpp"
    ],
    "languageId": 43
  },
  "C-ObjDump": {
    "type": "data",
    "extensions": [
      ".c-objdump"
    ],
    "tmScope": "objdump.x86asm",
    "aceMode": "assembly_x86",
    "languageId": 44
  },
  "C2hs Haskell": {
    "type": "programming",
    "group": "Haskell",
    "aliases": [
      "c2hs"
    ],
    "extensions": [
      ".chs"
    ],
    "tmScope": "source.haskell",
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "languageId": 45
  },
  "CIL": {
    "type": "data",
    "tmScope": "source.cil",
    "extensions": [
      ".cil"
    ],
    "aceMode": "text",
    "languageId": 29176339
  },
  "CLIPS": {
    "type": "programming",
    "color": "#00A300",
    "extensions": [
      ".clp"
    ],
    "tmScope": "source.clips",
    "aceMode": "text",
    "languageId": 46
  },
  "CMake": {
    "type": "programming",
    "color": "#DA3434",
    "extensions": [
      ".cmake",
      ".cmake.in"
    ],
    "filenames": [
      "CMakeLists.txt"
    ],
    "tmScope": "source.cmake",
    "aceMode": "text",
    "codemirrorMode": "cmake",
    "codemirrorMimeType": "text/x-cmake",
    "languageId": 47
  },
  "COBOL": {
    "type": "programming",
    "extensions": [
      ".cob",
      ".cbl",
      ".ccp",
      ".cobol",
      ".cpy"
    ],
    "tmScope": "source.cobol",
    "aceMode": "cobol",
    "codemirrorMode": "cobol",
    "codemirrorMimeType": "text/x-cobol",
    "languageId": 48
  },
  "CODEOWNERS": {
    "type": "data",
    "filenames": [
      "CODEOWNERS"
    ],
    "tmScope": "text.codeowners",
    "aceMode": "gitignore",
    "languageId": 321684729
  },
  "COLLADA": {
    "type": "data",
    "color": "#F1A42B",
    "extensions": [
      ".dae"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 49
  },
  "CSON": {
    "type": "data",
    "color": "#244776",
    "tmScope": "source.coffee",
    "aceMode": "coffee",
    "codemirrorMode": "coffeescript",
    "codemirrorMimeType": "text/x-coffeescript",
    "extensions": [
      ".cson"
    ],
    "languageId": 424
  },
  "CSS": {
    "type": "markup",
    "tmScope": "source.css",
    "aceMode": "css",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/css",
    "color": "#563d7c",
    "extensions": [
      ".css"
    ],
    "languageId": 50
  },
  "CSV": {
    "type": "data",
    "color": "#237346",
    "aceMode": "text",
    "tmScope": "none",
    "extensions": [
      ".csv"
    ],
    "languageId": 51
  },
  "CUE": {
    "type": "programming",
    "extensions": [
      ".cue"
    ],
    "tmScope": "source.cue",
    "aceMode": "text",
    "color": "#5886E1",
    "languageId": 356063509
  },
  "CWeb": {
    "type": "programming",
    "color": "#00007a",
    "extensions": [
      ".w"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 657332628
  },
  "Cabal Config": {
    "type": "data",
    "color": "#483465",
    "aliases": [
      "Cabal"
    ],
    "extensions": [
      ".cabal"
    ],
    "filenames": [
      "cabal.config",
      "cabal.project"
    ],
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "tmScope": "source.cabal",
    "languageId": 677095381
  },
  "Cap'n Proto": {
    "type": "programming",
    "color": "#c42727",
    "tmScope": "source.capnp",
    "extensions": [
      ".capnp"
    ],
    "aceMode": "text",
    "languageId": 52
  },
  "CartoCSS": {
    "type": "programming",
    "aliases": [
      "Carto"
    ],
    "extensions": [
      ".mss"
    ],
    "aceMode": "text",
    "tmScope": "source.css.mss",
    "languageId": 53
  },
  "Ceylon": {
    "type": "programming",
    "color": "#dfa535",
    "extensions": [
      ".ceylon"
    ],
    "tmScope": "source.ceylon",
    "aceMode": "text",
    "languageId": 54
  },
  "Chapel": {
    "type": "programming",
    "color": "#8dc63f",
    "aliases": [
      "chpl"
    ],
    "extensions": [
      ".chpl"
    ],
    "tmScope": "source.chapel",
    "aceMode": "text",
    "languageId": 55
  },
  "Charity": {
    "type": "programming",
    "extensions": [
      ".ch"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 56
  },
  "ChucK": {
    "type": "programming",
    "color": "#3f8000",
    "extensions": [
      ".ck"
    ],
    "tmScope": "source.java",
    "aceMode": "java",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-java",
    "languageId": 57
  },
  "Cirru": {
    "type": "programming",
    "color": "#ccccff",
    "tmScope": "source.cirru",
    "aceMode": "cirru",
    "extensions": [
      ".cirru"
    ],
    "languageId": 58
  },
  "Clarion": {
    "type": "programming",
    "color": "#db901e",
    "aceMode": "text",
    "extensions": [
      ".clw"
    ],
    "tmScope": "source.clarion",
    "languageId": 59
  },
  "Classic ASP": {
    "type": "programming",
    "color": "#6a40fd",
    "tmScope": "text.html.asp",
    "aliases": [
      "asp"
    ],
    "extensions": [
      ".asp"
    ],
    "aceMode": "text",
    "languageId": 8
  },
  "Clean": {
    "type": "programming",
    "color": "#3F85AF",
    "extensions": [
      ".icl",
      ".dcl"
    ],
    "tmScope": "source.clean",
    "aceMode": "text",
    "languageId": 60
  },
  "Click": {
    "type": "programming",
    "color": "#E4E6F3",
    "extensions": [
      ".click"
    ],
    "tmScope": "source.click",
    "aceMode": "text",
    "languageId": 61
  },
  "Clojure": {
    "type": "programming",
    "tmScope": "source.clojure",
    "aceMode": "clojure",
    "codemirrorMode": "clojure",
    "codemirrorMimeType": "text/x-clojure",
    "color": "#db5855",
    "extensions": [
      ".clj",
      ".boot",
      ".cl2",
      ".cljc",
      ".cljs",
      ".cljs.hl",
      ".cljscm",
      ".cljx",
      ".hic"
    ],
    "filenames": [
      "riemann.config"
    ],
    "languageId": 62
  },
  "Closure Templates": {
    "type": "markup",
    "color": "#0d948f",
    "aceMode": "soy_template",
    "codemirrorMode": "soy",
    "codemirrorMimeType": "text/x-soy",
    "aliases": [
      "soy"
    ],
    "extensions": [
      ".soy"
    ],
    "tmScope": "text.html.soy",
    "languageId": 357046146
  },
  "Cloud Firestore Security Rules": {
    "type": "data",
    "color": "#FFA000",
    "aceMode": "less",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/css",
    "tmScope": "source.firestore",
    "filenames": [
      "firestore.rules"
    ],
    "languageId": 407996372
  },
  "CoNLL-U": {
    "type": "data",
    "extensions": [
      ".conllu",
      ".conll"
    ],
    "tmScope": "text.conllu",
    "aceMode": "text",
    "aliases": [
      "CoNLL",
      "CoNLL-X"
    ],
    "languageId": 421026389
  },
  "CodeQL": {
    "type": "programming",
    "color": "#140f46",
    "extensions": [
      ".ql",
      ".qll"
    ],
    "tmScope": "source.ql",
    "aceMode": "text",
    "languageId": 424259634,
    "aliases": [
      "ql"
    ]
  },
  "CoffeeScript": {
    "type": "programming",
    "tmScope": "source.coffee",
    "aceMode": "coffee",
    "codemirrorMode": "coffeescript",
    "codemirrorMimeType": "text/x-coffeescript",
    "color": "#244776",
    "aliases": [
      "coffee",
      "coffee-script"
    ],
    "extensions": [
      ".coffee",
      "._coffee",
      ".cake",
      ".cjsx",
      ".iced"
    ],
    "filenames": [
      "Cakefile"
    ],
    "interpreters": [
      "coffee"
    ],
    "languageId": 63
  },
  "ColdFusion": {
    "type": "programming",
    "aceMode": "coldfusion",
    "color": "#ed2cd6",
    "aliases": [
      "cfm",
      "cfml",
      "coldfusion html"
    ],
    "extensions": [
      ".cfm",
      ".cfml"
    ],
    "tmScope": "text.html.cfm",
    "languageId": 64
  },
  "ColdFusion CFC": {
    "type": "programming",
    "color": "#ed2cd6",
    "group": "ColdFusion",
    "aceMode": "coldfusion",
    "aliases": [
      "cfc"
    ],
    "extensions": [
      ".cfc"
    ],
    "tmScope": "source.cfscript",
    "languageId": 65
  },
  "Common Lisp": {
    "type": "programming",
    "tmScope": "source.lisp",
    "color": "#3fb68b",
    "aliases": [
      "lisp"
    ],
    "extensions": [
      ".lisp",
      ".asd",
      ".cl",
      ".l",
      ".lsp",
      ".ny",
      ".podsl",
      ".sexp"
    ],
    "interpreters": [
      "lisp",
      "sbcl",
      "ccl",
      "clisp",
      "ecl"
    ],
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 66
  },
  "Common Workflow Language": {
    "aliases": [
      "cwl"
    ],
    "type": "programming",
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "extensions": [
      ".cwl"
    ],
    "interpreters": [
      "cwl-runner"
    ],
    "color": "#B5314C",
    "tmScope": "source.cwl",
    "languageId": 988547172
  },
  "Component Pascal": {
    "type": "programming",
    "color": "#B0CE4E",
    "extensions": [
      ".cp",
      ".cps"
    ],
    "tmScope": "source.pascal",
    "aceMode": "pascal",
    "codemirrorMode": "pascal",
    "codemirrorMimeType": "text/x-pascal",
    "languageId": 67
  },
  "Cool": {
    "type": "programming",
    "extensions": [
      ".cl"
    ],
    "tmScope": "source.cool",
    "aceMode": "text",
    "languageId": 68
  },
  "Coq": {
    "type": "programming",
    "color": "#d0b68c",
    "extensions": [
      ".coq",
      ".v"
    ],
    "tmScope": "source.coq",
    "aceMode": "text",
    "languageId": 69
  },
  "Cpp-ObjDump": {
    "type": "data",
    "extensions": [
      ".cppobjdump",
      ".c++-objdump",
      ".c++objdump",
      ".cpp-objdump",
      ".cxx-objdump"
    ],
    "tmScope": "objdump.x86asm",
    "aliases": [
      "c++-objdump"
    ],
    "aceMode": "assembly_x86",
    "languageId": 70
  },
  "Creole": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".creole"
    ],
    "tmScope": "text.html.creole",
    "aceMode": "text",
    "languageId": 71
  },
  "Crystal": {
    "type": "programming",
    "color": "#000100",
    "extensions": [
      ".cr"
    ],
    "aceMode": "ruby",
    "codemirrorMode": "crystal",
    "codemirrorMimeType": "text/x-crystal",
    "tmScope": "source.crystal",
    "interpreters": [
      "crystal"
    ],
    "languageId": 72
  },
  "Csound": {
    "type": "programming",
    "color": "#1a1a1a",
    "aliases": [
      "csound-orc"
    ],
    "extensions": [
      ".orc",
      ".udo"
    ],
    "tmScope": "source.csound",
    "aceMode": "csound_orchestra",
    "languageId": 73
  },
  "Csound Document": {
    "type": "programming",
    "color": "#1a1a1a",
    "aliases": [
      "csound-csd"
    ],
    "extensions": [
      ".csd"
    ],
    "tmScope": "source.csound-document",
    "aceMode": "csound_document",
    "languageId": 74
  },
  "Csound Score": {
    "type": "programming",
    "color": "#1a1a1a",
    "aliases": [
      "csound-sco"
    ],
    "extensions": [
      ".sco"
    ],
    "tmScope": "source.csound-score",
    "aceMode": "csound_score",
    "languageId": 75
  },
  "Cuda": {
    "type": "programming",
    "extensions": [
      ".cu",
      ".cuh"
    ],
    "tmScope": "source.cuda-c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "color": "#3A4E3A",
    "languageId": 77
  },
  "Cue Sheet": {
    "type": "data",
    "extensions": [
      ".cue"
    ],
    "tmScope": "source.cuesheet",
    "aceMode": "text",
    "languageId": 942714150
  },
  "Cycript": {
    "type": "programming",
    "extensions": [
      ".cy"
    ],
    "tmScope": "source.js",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "languageId": 78
  },
  "Cython": {
    "type": "programming",
    "color": "#fedf5b",
    "extensions": [
      ".pyx",
      ".pxd",
      ".pxi"
    ],
    "aliases": [
      "pyrex"
    ],
    "tmScope": "source.cython",
    "aceMode": "text",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-cython",
    "languageId": 79
  },
  "D": {
    "type": "programming",
    "color": "#ba595e",
    "aliases": [
      "Dlang"
    ],
    "extensions": [
      ".d",
      ".di"
    ],
    "tmScope": "source.d",
    "aceMode": "d",
    "codemirrorMode": "d",
    "codemirrorMimeType": "text/x-d",
    "languageId": 80
  },
  "D-ObjDump": {
    "type": "data",
    "extensions": [
      ".d-objdump"
    ],
    "tmScope": "objdump.x86asm",
    "aceMode": "assembly_x86",
    "languageId": 81
  },
  "DIGITAL Command Language": {
    "type": "programming",
    "aliases": [
      "dcl"
    ],
    "extensions": [
      ".com"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 82
  },
  "DM": {
    "type": "programming",
    "color": "#447265",
    "extensions": [
      ".dm"
    ],
    "aliases": [
      "byond"
    ],
    "tmScope": "source.dm",
    "aceMode": "c_cpp",
    "languageId": 83
  },
  "DNS Zone": {
    "type": "data",
    "extensions": [
      ".zone",
      ".arpa"
    ],
    "tmScope": "text.zone_file",
    "aceMode": "text",
    "languageId": 84
  },
  "DTrace": {
    "type": "programming",
    "aliases": [
      "dtrace-script"
    ],
    "extensions": [
      ".d"
    ],
    "interpreters": [
      "dtrace"
    ],
    "tmScope": "source.c",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 85
  },
  "Dafny": {
    "type": "programming",
    "color": "#FFEC25",
    "extensions": [
      ".dfy"
    ],
    "interpreters": [
      "dafny"
    ],
    "tmScope": "text.dfy.dafny",
    "aceMode": "text",
    "languageId": 969323346
  },
  "Darcs Patch": {
    "type": "data",
    "color": "#8eff23",
    "aliases": [
      "dpatch"
    ],
    "extensions": [
      ".darcspatch",
      ".dpatch"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 86
  },
  "Dart": {
    "type": "programming",
    "color": "#00B4AB",
    "extensions": [
      ".dart"
    ],
    "interpreters": [
      "dart"
    ],
    "tmScope": "source.dart",
    "aceMode": "dart",
    "codemirrorMode": "dart",
    "codemirrorMimeType": "application/dart",
    "languageId": 87
  },
  "DataWeave": {
    "type": "programming",
    "color": "#003a52",
    "extensions": [
      ".dwl"
    ],
    "aceMode": "text",
    "tmScope": "source.data-weave",
    "languageId": 974514097
  },
  "Dhall": {
    "type": "programming",
    "color": "#dfafff",
    "extensions": [
      ".dhall"
    ],
    "tmScope": "source.haskell",
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "languageId": 793969321
  },
  "Diff": {
    "type": "data",
    "extensions": [
      ".diff",
      ".patch"
    ],
    "aliases": [
      "udiff"
    ],
    "tmScope": "source.diff",
    "aceMode": "diff",
    "codemirrorMode": "diff",
    "codemirrorMimeType": "text/x-diff",
    "languageId": 88
  },
  "DirectX 3D File": {
    "type": "data",
    "color": "#aace60",
    "extensions": [
      ".x"
    ],
    "aceMode": "text",
    "tmScope": "none",
    "languageId": 201049282
  },
  "Dockerfile": {
    "type": "programming",
    "color": "#384d54",
    "tmScope": "source.dockerfile",
    "extensions": [
      ".dockerfile"
    ],
    "filenames": [
      "Dockerfile"
    ],
    "aceMode": "dockerfile",
    "codemirrorMode": "dockerfile",
    "codemirrorMimeType": "text/x-dockerfile",
    "languageId": 89
  },
  "Dogescript": {
    "type": "programming",
    "color": "#cca760",
    "extensions": [
      ".djs"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 90
  },
  "Dylan": {
    "type": "programming",
    "color": "#6c616e",
    "extensions": [
      ".dylan",
      ".dyl",
      ".intr",
      ".lid"
    ],
    "tmScope": "source.dylan",
    "aceMode": "text",
    "codemirrorMode": "dylan",
    "codemirrorMimeType": "text/x-dylan",
    "languageId": 91
  },
  "E": {
    "type": "programming",
    "color": "#ccce35",
    "extensions": [
      ".E"
    ],
    "interpreters": [
      "rune"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 92
  },
  "E-mail": {
    "type": "data",
    "aliases": [
      "email",
      "eml",
      "mail",
      "mbox"
    ],
    "extensions": [
      ".eml",
      ".mbox"
    ],
    "tmScope": "text.eml.basic",
    "aceMode": "text",
    "codemirrorMode": "mbox",
    "codemirrorMimeType": "application/mbox",
    "languageId": 529653389
  },
  "EBNF": {
    "type": "data",
    "extensions": [
      ".ebnf"
    ],
    "tmScope": "source.ebnf",
    "aceMode": "text",
    "codemirrorMode": "ebnf",
    "codemirrorMimeType": "text/x-ebnf",
    "languageId": 430
  },
  "ECL": {
    "type": "programming",
    "color": "#8a1267",
    "extensions": [
      ".ecl",
      ".eclxml"
    ],
    "tmScope": "source.ecl",
    "aceMode": "text",
    "codemirrorMode": "ecl",
    "codemirrorMimeType": "text/x-ecl",
    "languageId": 93
  },
  "ECLiPSe": {
    "type": "programming",
    "color": "#001d9d",
    "group": "prolog",
    "extensions": [
      ".ecl"
    ],
    "tmScope": "source.prolog.eclipse",
    "aceMode": "prolog",
    "languageId": 94
  },
  "EJS": {
    "type": "markup",
    "color": "#a91e50",
    "extensions": [
      ".ejs",
      ".ect",
      ".jst"
    ],
    "tmScope": "text.html.js",
    "aceMode": "ejs",
    "languageId": 95
  },
  "EQ": {
    "type": "programming",
    "color": "#a78649",
    "extensions": [
      ".eq"
    ],
    "tmScope": "source.cs",
    "aceMode": "csharp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csharp",
    "languageId": 96
  },
  "Eagle": {
    "type": "data",
    "extensions": [
      ".sch",
      ".brd"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 97
  },
  "Easybuild": {
    "type": "data",
    "color": "#069406",
    "group": "Python",
    "aceMode": "python",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "tmScope": "source.python",
    "extensions": [
      ".eb"
    ],
    "languageId": 342840477
  },
  "Ecere Projects": {
    "type": "data",
    "color": "#913960",
    "group": "JavaScript",
    "extensions": [
      ".epj"
    ],
    "tmScope": "source.json",
    "aceMode": "json",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "languageId": 98
  },
  "EditorConfig": {
    "type": "data",
    "color": "#fff1f2",
    "group": "INI",
    "filenames": [
      ".editorconfig"
    ],
    "aliases": [
      "editor-config"
    ],
    "aceMode": "ini",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "tmScope": "source.editorconfig",
    "languageId": 96139566
  },
  "Edje Data Collection": {
    "type": "data",
    "extensions": [
      ".edc"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 342840478
  },
  "Eiffel": {
    "type": "programming",
    "color": "#4d6977",
    "extensions": [
      ".e"
    ],
    "tmScope": "source.eiffel",
    "aceMode": "eiffel",
    "codemirrorMode": "eiffel",
    "codemirrorMimeType": "text/x-eiffel",
    "languageId": 99
  },
  "Elixir": {
    "type": "programming",
    "color": "#6e4a7e",
    "extensions": [
      ".ex",
      ".exs"
    ],
    "tmScope": "source.elixir",
    "aceMode": "elixir",
    "filenames": [
      "mix.lock"
    ],
    "interpreters": [
      "elixir"
    ],
    "languageId": 100
  },
  "Elm": {
    "type": "programming",
    "color": "#60B5CC",
    "extensions": [
      ".elm"
    ],
    "tmScope": "source.elm",
    "aceMode": "elm",
    "codemirrorMode": "elm",
    "codemirrorMimeType": "text/x-elm",
    "languageId": 101
  },
  "Emacs Lisp": {
    "type": "programming",
    "tmScope": "source.emacs.lisp",
    "color": "#c065db",
    "aliases": [
      "elisp",
      "emacs"
    ],
    "filenames": [
      ".abbrev_defs",
      ".emacs",
      ".emacs.desktop",
      ".gnus",
      ".spacemacs",
      ".viper",
      "Cask",
      "Project.ede",
      "_emacs",
      "abbrev_defs"
    ],
    "extensions": [
      ".el",
      ".emacs",
      ".emacs.desktop"
    ],
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 102
  },
  "EmberScript": {
    "type": "programming",
    "color": "#FFF4F3",
    "extensions": [
      ".em",
      ".emberscript"
    ],
    "tmScope": "source.coffee",
    "aceMode": "coffee",
    "codemirrorMode": "coffeescript",
    "codemirrorMimeType": "text/x-coffeescript",
    "languageId": 103
  },
  "Erlang": {
    "type": "programming",
    "color": "#B83998",
    "extensions": [
      ".erl",
      ".app.src",
      ".es",
      ".escript",
      ".hrl",
      ".xrl",
      ".yrl"
    ],
    "filenames": [
      "Emakefile",
      "rebar.config",
      "rebar.config.lock",
      "rebar.lock"
    ],
    "tmScope": "source.erlang",
    "aceMode": "erlang",
    "codemirrorMode": "erlang",
    "codemirrorMimeType": "text/x-erlang",
    "interpreters": [
      "escript"
    ],
    "languageId": 104
  },
  "F#": {
    "type": "programming",
    "color": "#b845fc",
    "aliases": [
      "fsharp"
    ],
    "extensions": [
      ".fs",
      ".fsi",
      ".fsx"
    ],
    "tmScope": "source.fsharp",
    "aceMode": "text",
    "codemirrorMode": "mllike",
    "codemirrorMimeType": "text/x-fsharp",
    "languageId": 105
  },
  "F*": {
    "fsName": "Fstar",
    "type": "programming",
    "color": "#572e30",
    "aliases": [
      "fstar"
    ],
    "extensions": [
      ".fst"
    ],
    "tmScope": "source.fstar",
    "aceMode": "text",
    "languageId": 336943375
  },
  "FIGlet Font": {
    "type": "data",
    "color": "#FFDDBB",
    "aliases": [
      "FIGfont"
    ],
    "extensions": [
      ".flf"
    ],
    "tmScope": "source.figfont",
    "aceMode": "text",
    "languageId": 686129783
  },
  "FLUX": {
    "type": "programming",
    "color": "#88ccff",
    "extensions": [
      ".fx",
      ".flux"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 106
  },
  "Factor": {
    "type": "programming",
    "color": "#636746",
    "extensions": [
      ".factor"
    ],
    "filenames": [
      ".factor-boot-rc",
      ".factor-rc"
    ],
    "tmScope": "source.factor",
    "aceMode": "text",
    "codemirrorMode": "factor",
    "codemirrorMimeType": "text/x-factor",
    "languageId": 108
  },
  "Fancy": {
    "type": "programming",
    "color": "#7b9db4",
    "extensions": [
      ".fy",
      ".fancypack"
    ],
    "filenames": [
      "Fakefile"
    ],
    "tmScope": "source.fancy",
    "aceMode": "text",
    "languageId": 109
  },
  "Fantom": {
    "type": "programming",
    "color": "#14253c",
    "extensions": [
      ".fan"
    ],
    "tmScope": "source.fan",
    "aceMode": "text",
    "languageId": 110
  },
  "Faust": {
    "type": "programming",
    "color": "#c37240",
    "extensions": [
      ".dsp"
    ],
    "tmScope": "source.faust",
    "aceMode": "text",
    "languageId": 622529198
  },
  "Fennel": {
    "type": "programming",
    "tmScope": "source.fnl",
    "aceMode": "text",
    "color": "#fff3d7",
    "interpreters": [
      "fennel"
    ],
    "extensions": [
      ".fnl"
    ],
    "languageId": 239946126
  },
  "Filebench WML": {
    "type": "programming",
    "color": "#F6B900",
    "extensions": [
      ".f"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 111
  },
  "Filterscript": {
    "type": "programming",
    "group": "RenderScript",
    "extensions": [
      ".fs"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 112
  },
  "Fluent": {
    "type": "programming",
    "color": "#ffcc33",
    "extensions": [
      ".ftl"
    ],
    "tmScope": "source.ftl",
    "aceMode": "text",
    "languageId": 206353404
  },
  "Formatted": {
    "type": "data",
    "extensions": [
      ".for",
      ".eam.fs"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 113
  },
  "Forth": {
    "type": "programming",
    "color": "#341708",
    "extensions": [
      ".fth",
      ".4th",
      ".f",
      ".for",
      ".forth",
      ".fr",
      ".frt",
      ".fs"
    ],
    "tmScope": "source.forth",
    "aceMode": "forth",
    "codemirrorMode": "forth",
    "codemirrorMimeType": "text/x-forth",
    "languageId": 114
  },
  "Fortran": {
    "group": "Fortran",
    "type": "programming",
    "color": "#4d41b1",
    "extensions": [
      ".f",
      ".f77",
      ".for",
      ".fpp"
    ],
    "tmScope": "source.fortran",
    "aceMode": "text",
    "codemirrorMode": "fortran",
    "codemirrorMimeType": "text/x-fortran",
    "languageId": 107
  },
  "Fortran Free Form": {
    "group": "Fortran",
    "color": "#4d41b1",
    "type": "programming",
    "extensions": [
      ".f90",
      ".f03",
      ".f08",
      ".f95"
    ],
    "tmScope": "source.fortran.modern",
    "aceMode": "text",
    "codemirrorMode": "fortran",
    "codemirrorMimeType": "text/x-fortran",
    "languageId": 761352333
  },
  "FreeBasic": {
    "type": "programming",
    "color": "#867db1",
    "extensions": [
      ".bi",
      ".bas"
    ],
    "tmScope": "source.vbnet",
    "aliases": [
      "fb"
    ],
    "aceMode": "text",
    "codemirrorMode": "vb",
    "codemirrorMimeType": "text/x-vb",
    "languageId": 472896659
  },
  "FreeMarker": {
    "type": "programming",
    "color": "#0050b2",
    "aliases": [
      "ftl"
    ],
    "extensions": [
      ".ftl"
    ],
    "tmScope": "text.html.ftl",
    "aceMode": "ftl",
    "languageId": 115
  },
  "Frege": {
    "type": "programming",
    "color": "#00cafe",
    "extensions": [
      ".fr"
    ],
    "tmScope": "source.haskell",
    "aceMode": "haskell",
    "languageId": 116
  },
  "Futhark": {
    "type": "programming",
    "color": "#5f021f",
    "extensions": [
      ".fut"
    ],
    "tmScope": "source.futhark",
    "aceMode": "text",
    "languageId": 97358117
  },
  "G-code": {
    "type": "programming",
    "color": "#D08CF2",
    "extensions": [
      ".g",
      ".cnc",
      ".gco",
      ".gcode"
    ],
    "tmScope": "source.gcode",
    "aceMode": "gcode",
    "languageId": 117
  },
  "GAML": {
    "type": "programming",
    "color": "#FFC766",
    "extensions": [
      ".gaml"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 290345951
  },
  "GAMS": {
    "type": "programming",
    "color": "#f49a22",
    "extensions": [
      ".gms"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 118
  },
  "GAP": {
    "type": "programming",
    "color": "#0000cc",
    "extensions": [
      ".g",
      ".gap",
      ".gd",
      ".gi",
      ".tst"
    ],
    "tmScope": "source.gap",
    "aceMode": "text",
    "languageId": 119
  },
  "GCC Machine Description": {
    "type": "programming",
    "color": "#FFCFAB",
    "extensions": [
      ".md"
    ],
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 121
  },
  "GDB": {
    "type": "programming",
    "extensions": [
      ".gdb",
      ".gdbinit"
    ],
    "tmScope": "source.gdb",
    "aceMode": "text",
    "languageId": 122
  },
  "GDScript": {
    "type": "programming",
    "color": "#355570",
    "extensions": [
      ".gd"
    ],
    "tmScope": "source.gdscript",
    "aceMode": "text",
    "languageId": 123
  },
  "GEDCOM": {
    "type": "data",
    "color": "#003058",
    "aceMode": "text",
    "extensions": [
      ".ged"
    ],
    "tmScope": "source.gedcom",
    "languageId": 459577965
  },
  "GLSL": {
    "type": "programming",
    "color": "#5686a5",
    "extensions": [
      ".glsl",
      ".fp",
      ".frag",
      ".frg",
      ".fs",
      ".fsh",
      ".fshader",
      ".geo",
      ".geom",
      ".glslf",
      ".glslv",
      ".gs",
      ".gshader",
      ".shader",
      ".tesc",
      ".tese",
      ".vert",
      ".vrx",
      ".vsh",
      ".vshader"
    ],
    "tmScope": "source.glsl",
    "aceMode": "glsl",
    "languageId": 124
  },
  "GN": {
    "type": "data",
    "extensions": [
      ".gn",
      ".gni"
    ],
    "interpreters": [
      "gn"
    ],
    "filenames": [
      ".gn"
    ],
    "tmScope": "source.gn",
    "aceMode": "python",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "languageId": 302957008
  },
  "Game Maker Language": {
    "type": "programming",
    "color": "#71b417",
    "extensions": [
      ".gml"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 125
  },
  "Gemfile.lock": {
    "type": "data",
    "color": "#701516",
    "searchable": false,
    "tmScope": "source.gemfile-lock",
    "aceMode": "text",
    "filenames": [
      "Gemfile.lock"
    ],
    "languageId": 907065713
  },
  "Genie": {
    "type": "programming",
    "aceMode": "text",
    "extensions": [
      ".gs"
    ],
    "color": "#fb855d",
    "tmScope": "none",
    "languageId": 792408528
  },
  "Genshi": {
    "type": "programming",
    "color": "#951531",
    "extensions": [
      ".kid"
    ],
    "tmScope": "text.xml.genshi",
    "aliases": [
      "xml+genshi",
      "xml+kid"
    ],
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 126
  },
  "Gentoo Ebuild": {
    "type": "programming",
    "color": "#9400ff",
    "group": "Shell",
    "extensions": [
      ".ebuild"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 127
  },
  "Gentoo Eclass": {
    "type": "programming",
    "color": "#9400ff",
    "group": "Shell",
    "extensions": [
      ".eclass"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 128
  },
  "Gerber Image": {
    "type": "data",
    "color": "#d20b00",
    "aliases": [
      "rs-274x"
    ],
    "extensions": [
      ".gbr",
      ".cmp",
      ".gbl",
      ".gbo",
      ".gbp",
      ".gbs",
      ".gko",
      ".gml",
      ".gpb",
      ".gpt",
      ".gtl",
      ".gto",
      ".gtp",
      ".gts",
      ".ncl",
      ".sol"
    ],
    "interpreters": [
      "gerbv",
      "gerbview"
    ],
    "tmScope": "source.gerber",
    "aceMode": "text",
    "languageId": 404627610
  },
  "Gettext Catalog": {
    "type": "prose",
    "aliases": [
      "pot"
    ],
    "extensions": [
      ".po",
      ".pot"
    ],
    "tmScope": "source.po",
    "aceMode": "text",
    "languageId": 129
  },
  "Gherkin": {
    "type": "programming",
    "extensions": [
      ".feature",
      ".story"
    ],
    "tmScope": "text.gherkin.feature",
    "aliases": [
      "cucumber"
    ],
    "aceMode": "text",
    "color": "#5B2063",
    "languageId": 76
  },
  "Git Attributes": {
    "type": "data",
    "color": "#F44D27",
    "group": "INI",
    "aliases": [
      "gitattributes"
    ],
    "filenames": [
      ".gitattributes"
    ],
    "tmScope": "source.gitattributes",
    "aceMode": "gitignore",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 956324166
  },
  "Git Config": {
    "type": "data",
    "color": "#F44D27",
    "group": "INI",
    "aliases": [
      "gitconfig",
      "gitmodules"
    ],
    "extensions": [
      ".gitconfig"
    ],
    "filenames": [
      ".gitconfig",
      ".gitmodules"
    ],
    "aceMode": "ini",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "tmScope": "source.gitconfig",
    "languageId": 807968997
  },
  "Glyph": {
    "type": "programming",
    "color": "#c1ac7f",
    "extensions": [
      ".glf"
    ],
    "tmScope": "source.tcl",
    "aceMode": "tcl",
    "codemirrorMode": "tcl",
    "codemirrorMimeType": "text/x-tcl",
    "languageId": 130
  },
  "Glyph Bitmap Distribution Format": {
    "type": "data",
    "extensions": [
      ".bdf"
    ],
    "tmScope": "source.bdf",
    "aceMode": "text",
    "languageId": 997665271
  },
  "Gnuplot": {
    "type": "programming",
    "color": "#f0a9f0",
    "extensions": [
      ".gp",
      ".gnu",
      ".gnuplot",
      ".p",
      ".plot",
      ".plt"
    ],
    "interpreters": [
      "gnuplot"
    ],
    "tmScope": "source.gnuplot",
    "aceMode": "text",
    "languageId": 131
  },
  "Go": {
    "type": "programming",
    "color": "#00ADD8",
    "aliases": [
      "golang"
    ],
    "extensions": [
      ".go"
    ],
    "tmScope": "source.go",
    "aceMode": "golang",
    "codemirrorMode": "go",
    "codemirrorMimeType": "text/x-go",
    "languageId": 132
  },
  "Go Checksums": {
    "type": "data",
    "color": "#00ADD8",
    "aliases": [
      "go.sum",
      "go sum"
    ],
    "filenames": [
      "go.sum"
    ],
    "tmScope": "go.sum",
    "aceMode": "text",
    "languageId": 1054391671
  },
  "Go Module": {
    "type": "data",
    "color": "#00ADD8",
    "aliases": [
      "go.mod",
      "go mod"
    ],
    "filenames": [
      "go.mod"
    ],
    "tmScope": "go.mod",
    "aceMode": "text",
    "languageId": 947461016
  },
  "Golo": {
    "type": "programming",
    "color": "#88562A",
    "extensions": [
      ".golo"
    ],
    "tmScope": "source.golo",
    "aceMode": "text",
    "languageId": 133
  },
  "Gosu": {
    "type": "programming",
    "color": "#82937f",
    "extensions": [
      ".gs",
      ".gst",
      ".gsx",
      ".vark"
    ],
    "tmScope": "source.gosu.2",
    "aceMode": "text",
    "languageId": 134
  },
  "Grace": {
    "type": "programming",
    "color": "#615f8b",
    "extensions": [
      ".grace"
    ],
    "tmScope": "source.grace",
    "aceMode": "text",
    "languageId": 135
  },
  "Gradle": {
    "type": "data",
    "color": "#02303a",
    "extensions": [
      ".gradle"
    ],
    "tmScope": "source.groovy.gradle",
    "aceMode": "text",
    "languageId": 136
  },
  "Grammatical Framework": {
    "type": "programming",
    "aliases": [
      "gf"
    ],
    "extensions": [
      ".gf"
    ],
    "color": "#ff0000",
    "tmScope": "source.gf",
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "languageId": 137
  },
  "Graph Modeling Language": {
    "type": "data",
    "extensions": [
      ".gml"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 138
  },
  "GraphQL": {
    "type": "data",
    "color": "#e10098",
    "extensions": [
      ".graphql",
      ".gql",
      ".graphqls"
    ],
    "tmScope": "source.graphql",
    "aceMode": "text",
    "languageId": 139
  },
  "Graphviz (DOT)": {
    "type": "data",
    "color": "#2596be",
    "tmScope": "source.dot",
    "extensions": [
      ".dot",
      ".gv"
    ],
    "aceMode": "text",
    "languageId": 140
  },
  "Groovy": {
    "type": "programming",
    "tmScope": "source.groovy",
    "aceMode": "groovy",
    "codemirrorMode": "groovy",
    "codemirrorMimeType": "text/x-groovy",
    "color": "#4298b8",
    "extensions": [
      ".groovy",
      ".grt",
      ".gtpl",
      ".gvy"
    ],
    "interpreters": [
      "groovy"
    ],
    "filenames": [
      "Jenkinsfile"
    ],
    "languageId": 142
  },
  "Groovy Server Pages": {
    "type": "programming",
    "color": "#4298b8",
    "group": "Groovy",
    "aliases": [
      "gsp",
      "java server page"
    ],
    "extensions": [
      ".gsp"
    ],
    "tmScope": "text.html.jsp",
    "aceMode": "jsp",
    "codemirrorMode": "htmlembedded",
    "codemirrorMimeType": "application/x-jsp",
    "languageId": 143
  },
  "HAProxy": {
    "type": "data",
    "color": "#106da9",
    "extensions": [
      ".cfg"
    ],
    "filenames": [
      "haproxy.cfg"
    ],
    "tmScope": "source.haproxy-config",
    "aceMode": "text",
    "languageId": 366607477
  },
  "HCL": {
    "type": "programming",
    "extensions": [
      ".hcl",
      ".nomad",
      ".tf",
      ".tfvars",
      ".workflow"
    ],
    "aliases": [
      "HashiCorp Configuration Language",
      "terraform"
    ],
    "aceMode": "ruby",
    "codemirrorMode": "ruby",
    "codemirrorMimeType": "text/x-ruby",
    "tmScope": "source.terraform",
    "languageId": 144
  },
  "HLSL": {
    "type": "programming",
    "color": "#aace60",
    "extensions": [
      ".hlsl",
      ".cginc",
      ".fx",
      ".fxh",
      ".hlsli"
    ],
    "aceMode": "text",
    "tmScope": "source.hlsl",
    "languageId": 145
  },
  "HTML": {
    "type": "markup",
    "tmScope": "text.html.basic",
    "aceMode": "html",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "color": "#e34c26",
    "aliases": [
      "xhtml"
    ],
    "extensions": [
      ".html",
      ".hta",
      ".htm",
      ".html.hl",
      ".inc",
      ".xht",
      ".xhtml"
    ],
    "languageId": 146
  },
  "HTML+ECR": {
    "type": "markup",
    "color": "#2e1052",
    "tmScope": "text.html.ecr",
    "group": "HTML",
    "aliases": [
      "ecr"
    ],
    "extensions": [
      ".ecr"
    ],
    "aceMode": "text",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 148
  },
  "HTML+EEX": {
    "type": "markup",
    "color": "#6e4a7e",
    "tmScope": "text.html.elixir",
    "group": "HTML",
    "aliases": [
      "eex",
      "leex"
    ],
    "extensions": [
      ".eex",
      ".html.leex"
    ],
    "aceMode": "text",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 149
  },
  "HTML+ERB": {
    "type": "markup",
    "color": "#701516",
    "tmScope": "text.html.erb",
    "group": "HTML",
    "aliases": [
      "erb",
      "rhtml",
      "html+ruby"
    ],
    "extensions": [
      ".erb",
      ".erb.deface",
      ".rhtml"
    ],
    "aceMode": "text",
    "codemirrorMode": "htmlembedded",
    "codemirrorMimeType": "application/x-erb",
    "languageId": 150
  },
  "HTML+PHP": {
    "type": "markup",
    "color": "#4f5d95",
    "tmScope": "text.html.php",
    "group": "HTML",
    "extensions": [
      ".phtml"
    ],
    "aceMode": "php",
    "codemirrorMode": "php",
    "codemirrorMimeType": "application/x-httpd-php",
    "languageId": 151
  },
  "HTML+Razor": {
    "type": "markup",
    "color": "#512be4",
    "tmScope": "text.html.cshtml",
    "group": "HTML",
    "aliases": [
      "razor"
    ],
    "extensions": [
      ".cshtml",
      ".razor"
    ],
    "aceMode": "razor",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 479039817
  },
  "HTTP": {
    "type": "data",
    "color": "#005C9C",
    "extensions": [
      ".http"
    ],
    "tmScope": "source.httpspec",
    "aceMode": "text",
    "codemirrorMode": "http",
    "codemirrorMimeType": "message/http",
    "languageId": 152
  },
  "HXML": {
    "type": "data",
    "color": "#f68712",
    "aceMode": "text",
    "extensions": [
      ".hxml"
    ],
    "tmScope": "source.hxml",
    "languageId": 786683730
  },
  "Hack": {
    "type": "programming",
    "aceMode": "php",
    "codemirrorMode": "php",
    "codemirrorMimeType": "application/x-httpd-php",
    "extensions": [
      ".hack",
      ".hh",
      ".hhi",
      ".php"
    ],
    "tmScope": "source.hack",
    "color": "#878787",
    "languageId": 153
  },
  "Haml": {
    "type": "markup",
    "color": "#ece2a9",
    "extensions": [
      ".haml",
      ".haml.deface"
    ],
    "tmScope": "text.haml",
    "aceMode": "haml",
    "codemirrorMode": "haml",
    "codemirrorMimeType": "text/x-haml",
    "languageId": 154
  },
  "Handlebars": {
    "type": "markup",
    "color": "#f7931e",
    "aliases": [
      "hbs",
      "htmlbars"
    ],
    "extensions": [
      ".handlebars",
      ".hbs"
    ],
    "tmScope": "text.html.handlebars",
    "aceMode": "handlebars",
    "languageId": 155
  },
  "Harbour": {
    "type": "programming",
    "color": "#0e60e3",
    "extensions": [
      ".hb"
    ],
    "tmScope": "source.harbour",
    "aceMode": "text",
    "languageId": 156
  },
  "Haskell": {
    "type": "programming",
    "color": "#5e5086",
    "extensions": [
      ".hs",
      ".hs-boot",
      ".hsc"
    ],
    "interpreters": [
      "runghc",
      "runhaskell",
      "runhugs"
    ],
    "tmScope": "source.haskell",
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "languageId": 157
  },
  "Haxe": {
    "type": "programming",
    "aceMode": "haxe",
    "codemirrorMode": "haxe",
    "codemirrorMimeType": "text/x-haxe",
    "color": "#df7900",
    "extensions": [
      ".hx",
      ".hxsl"
    ],
    "tmScope": "source.hx",
    "languageId": 158
  },
  "HiveQL": {
    "type": "programming",
    "extensions": [
      ".q",
      ".hql"
    ],
    "color": "#dce200",
    "tmScope": "source.hql",
    "aceMode": "sql",
    "languageId": 931814087
  },
  "HolyC": {
    "type": "programming",
    "color": "#ffefaf",
    "extensions": [
      ".hc"
    ],
    "tmScope": "source.hc",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 928121743
  },
  "Hy": {
    "type": "programming",
    "aceMode": "text",
    "color": "#7790B2",
    "extensions": [
      ".hy"
    ],
    "interpreters": [
      "hy"
    ],
    "aliases": [
      "hylang"
    ],
    "tmScope": "source.hy",
    "languageId": 159
  },
  "HyPhy": {
    "type": "programming",
    "aceMode": "text",
    "extensions": [
      ".bf"
    ],
    "tmScope": "none",
    "languageId": 160
  },
  "IDL": {
    "type": "programming",
    "color": "#a3522f",
    "extensions": [
      ".pro",
      ".dlm"
    ],
    "tmScope": "source.idl",
    "aceMode": "text",
    "codemirrorMode": "idl",
    "codemirrorMimeType": "text/x-idl",
    "languageId": 161
  },
  "IGOR Pro": {
    "type": "programming",
    "color": "#0000cc",
    "extensions": [
      ".ipf"
    ],
    "aliases": [
      "igor",
      "igorpro"
    ],
    "tmScope": "source.igor",
    "aceMode": "text",
    "languageId": 162
  },
  "INI": {
    "type": "data",
    "color": "#d1dbe0",
    "extensions": [
      ".ini",
      ".cfg",
      ".dof",
      ".lektorproject",
      ".prefs",
      ".pro",
      ".properties"
    ],
    "filenames": [
      "buildozer.spec"
    ],
    "tmScope": "source.ini",
    "aliases": [
      "dosini"
    ],
    "aceMode": "ini",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "languageId": 163
  },
  "IRC log": {
    "type": "data",
    "aliases": [
      "irc",
      "irc logs"
    ],
    "extensions": [
      ".irclog",
      ".weechatlog"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "codemirrorMode": "mirc",
    "codemirrorMimeType": "text/mirc",
    "languageId": 164
  },
  "Idris": {
    "type": "programming",
    "color": "#b30000",
    "extensions": [
      ".idr",
      ".lidr"
    ],
    "aceMode": "text",
    "tmScope": "source.idris",
    "languageId": 165
  },
  "Ignore List": {
    "type": "data",
    "color": "#000000",
    "group": "INI",
    "aliases": [
      "ignore",
      "gitignore",
      "git-ignore"
    ],
    "extensions": [
      ".gitignore"
    ],
    "filenames": [
      ".atomignore",
      ".babelignore",
      ".bzrignore",
      ".coffeelintignore",
      ".cvsignore",
      ".dockerignore",
      ".eleventyignore",
      ".eslintignore",
      ".gitignore",
      ".markdownlintignore",
      ".nodemonignore",
      ".npmignore",
      ".prettierignore",
      ".stylelintignore",
      ".vscodeignore",
      "gitignore-global",
      "gitignore_global"
    ],
    "aceMode": "gitignore",
    "tmScope": "source.gitignore",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 74444240
  },
  "ImageJ Macro": {
    "type": "programming",
    "color": "#99AAFF",
    "aliases": [
      "ijm"
    ],
    "extensions": [
      ".ijm"
    ],
    "aceMode": "text",
    "tmScope": "none",
    "languageId": 575143428
  },
  "Inform 7": {
    "type": "programming",
    "wrap": true,
    "extensions": [
      ".ni",
      ".i7x"
    ],
    "tmScope": "source.inform7",
    "aliases": [
      "i7",
      "inform7"
    ],
    "aceMode": "text",
    "languageId": 166
  },
  "Inno Setup": {
    "type": "programming",
    "color": "#264b99",
    "extensions": [
      ".iss",
      ".isl"
    ],
    "tmScope": "source.inno",
    "aceMode": "text",
    "languageId": 167
  },
  "Io": {
    "type": "programming",
    "color": "#a9188d",
    "extensions": [
      ".io"
    ],
    "interpreters": [
      "io"
    ],
    "tmScope": "source.io",
    "aceMode": "io",
    "languageId": 168
  },
  "Ioke": {
    "type": "programming",
    "color": "#078193",
    "extensions": [
      ".ik"
    ],
    "interpreters": [
      "ioke"
    ],
    "tmScope": "source.ioke",
    "aceMode": "text",
    "languageId": 169
  },
  "Isabelle": {
    "type": "programming",
    "color": "#FEFE00",
    "extensions": [
      ".thy"
    ],
    "tmScope": "source.isabelle.theory",
    "aceMode": "text",
    "languageId": 170
  },
  "Isabelle ROOT": {
    "type": "programming",
    "color": "#FEFE00",
    "group": "Isabelle",
    "filenames": [
      "ROOT"
    ],
    "tmScope": "source.isabelle.root",
    "aceMode": "text",
    "languageId": 171
  },
  "J": {
    "type": "programming",
    "color": "#9EEDFF",
    "extensions": [
      ".ijs"
    ],
    "interpreters": [
      "jconsole"
    ],
    "tmScope": "source.j",
    "aceMode": "text",
    "languageId": 172
  },
  "JAR Manifest": {
    "type": "data",
    "color": "#b07219",
    "filenames": [
      "MANIFEST.MF"
    ],
    "tmScope": "source.yaml",
    "aceMode": "text",
    "languageId": 447261135
  },
  "JFlex": {
    "type": "programming",
    "color": "#DBCA00",
    "group": "Lex",
    "extensions": [
      ".flex",
      ".jflex"
    ],
    "tmScope": "source.jflex",
    "aceMode": "text",
    "languageId": 173
  },
  "JSON": {
    "type": "data",
    "color": "#292929",
    "tmScope": "source.json",
    "aceMode": "json",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "extensions": [
      ".json",
      ".avsc",
      ".geojson",
      ".gltf",
      ".har",
      ".ice",
      ".JSON-tmLanguage",
      ".jsonl",
      ".mcmeta",
      ".tfstate",
      ".tfstate.backup",
      ".topojson",
      ".webapp",
      ".webmanifest",
      ".yy",
      ".yyp"
    ],
    "filenames": [
      ".arcconfig",
      ".auto-changelog",
      ".c8rc",
      ".htmlhintrc",
      ".imgbotconfig",
      ".nycrc",
      ".tern-config",
      ".tern-project",
      ".watchmanconfig",
      "Pipfile.lock",
      "composer.lock",
      "mcmod.info"
    ],
    "languageId": 174
  },
  "JSON with Comments": {
    "type": "data",
    "color": "#292929",
    "group": "JSON",
    "tmScope": "source.js",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "aliases": [
      "jsonc"
    ],
    "extensions": [
      ".jsonc",
      ".sublime-build",
      ".sublime-commands",
      ".sublime-completions",
      ".sublime-keymap",
      ".sublime-macro",
      ".sublime-menu",
      ".sublime-mousemap",
      ".sublime-project",
      ".sublime-settings",
      ".sublime-theme",
      ".sublime-workspace",
      ".sublime_metrics",
      ".sublime_session"
    ],
    "filenames": [
      ".babelrc",
      ".eslintrc.json",
      ".jscsrc",
      ".jshintrc",
      ".jslintrc",
      "api-extractor.json",
      "devcontainer.json",
      "jsconfig.json",
      "language-configuration.json",
      "tsconfig.json",
      "tslint.json"
    ],
    "languageId": 423
  },
  "JSON5": {
    "type": "data",
    "color": "#267CB9",
    "extensions": [
      ".json5"
    ],
    "tmScope": "source.js",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "languageId": 175
  },
  "JSONLD": {
    "type": "data",
    "color": "#0c479c",
    "extensions": [
      ".jsonld"
    ],
    "tmScope": "source.js",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "languageId": 176
  },
  "JSONiq": {
    "color": "#40d47e",
    "type": "programming",
    "aceMode": "jsoniq",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "extensions": [
      ".jq"
    ],
    "tmScope": "source.jsoniq",
    "languageId": 177
  },
  "Jasmin": {
    "type": "programming",
    "color": "#d03600",
    "aceMode": "java",
    "extensions": [
      ".j"
    ],
    "tmScope": "source.jasmin",
    "languageId": 180
  },
  "Java": {
    "type": "programming",
    "tmScope": "source.java",
    "aceMode": "java",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-java",
    "color": "#b07219",
    "extensions": [
      ".java",
      ".jav"
    ],
    "languageId": 181
  },
  "Java Properties": {
    "type": "data",
    "color": "#2A6277",
    "extensions": [
      ".properties"
    ],
    "tmScope": "source.java-properties",
    "aceMode": "properties",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "languageId": 519377561
  },
  "Java Server Pages": {
    "type": "programming",
    "color": "#2A6277",
    "group": "Java",
    "aliases": [
      "jsp"
    ],
    "extensions": [
      ".jsp"
    ],
    "tmScope": "text.html.jsp",
    "aceMode": "jsp",
    "codemirrorMode": "htmlembedded",
    "codemirrorMimeType": "application/x-jsp",
    "languageId": 182
  },
  "JavaScript": {
    "type": "programming",
    "tmScope": "source.js",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "color": "#f1e05a",
    "aliases": [
      "js",
      "node"
    ],
    "extensions": [
      ".js",
      "._js",
      ".bones",
      ".cjs",
      ".es",
      ".es6",
      ".frag",
      ".gs",
      ".jake",
      ".javascript",
      ".jsb",
      ".jscad",
      ".jsfl",
      ".jsm",
      ".jss",
      ".jsx",
      ".mjs",
      ".njs",
      ".pac",
      ".sjs",
      ".ssjs",
      ".xsjs",
      ".xsjslib"
    ],
    "filenames": [
      "Jakefile"
    ],
    "interpreters": [
      "chakra",
      "d8",
      "gjs",
      "js",
      "node",
      "nodejs",
      "qjs",
      "rhino",
      "v8",
      "v8-shell"
    ],
    "languageId": 183
  },
  "JavaScript+ERB": {
    "type": "programming",
    "color": "#f1e05a",
    "tmScope": "source.js",
    "group": "JavaScript",
    "extensions": [
      ".js.erb"
    ],
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/javascript",
    "languageId": 914318960
  },
  "Jest Snapshot": {
    "type": "data",
    "color": "#15c213",
    "tmScope": "source.jest.snap",
    "extensions": [
      ".snap"
    ],
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/javascript",
    "languageId": 774635084
  },
  "Jinja": {
    "type": "markup",
    "color": "#a52a22",
    "aliases": [
      "django",
      "html+django",
      "html+jinja",
      "htmldjango"
    ],
    "extensions": [
      ".jinja",
      ".j2",
      ".jinja2"
    ],
    "tmScope": "text.html.django",
    "aceMode": "django",
    "codemirrorMode": "django",
    "codemirrorMimeType": "text/x-django",
    "languageId": 147
  },
  "Jison": {
    "type": "programming",
    "color": "#56b3cb",
    "group": "Yacc",
    "extensions": [
      ".jison"
    ],
    "tmScope": "source.jison",
    "aceMode": "text",
    "languageId": 284531423
  },
  "Jison Lex": {
    "type": "programming",
    "color": "#56b3cb",
    "group": "Lex",
    "extensions": [
      ".jisonlex"
    ],
    "tmScope": "source.jisonlex",
    "aceMode": "text",
    "languageId": 406395330
  },
  "Jolie": {
    "type": "programming",
    "extensions": [
      ".ol",
      ".iol"
    ],
    "interpreters": [
      "jolie"
    ],
    "color": "#843179",
    "aceMode": "text",
    "tmScope": "source.jolie",
    "languageId": 998078858
  },
  "Jsonnet": {
    "color": "#0064bd",
    "type": "programming",
    "aceMode": "text",
    "extensions": [
      ".jsonnet",
      ".libsonnet"
    ],
    "tmScope": "source.jsonnet",
    "languageId": 664885656
  },
  "Julia": {
    "type": "programming",
    "extensions": [
      ".jl"
    ],
    "interpreters": [
      "julia"
    ],
    "color": "#a270ba",
    "tmScope": "source.julia",
    "aceMode": "julia",
    "codemirrorMode": "julia",
    "codemirrorMimeType": "text/x-julia",
    "languageId": 184
  },
  "Jupyter Notebook": {
    "type": "markup",
    "aceMode": "json",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "tmScope": "source.json",
    "color": "#DA5B0B",
    "extensions": [
      ".ipynb"
    ],
    "filenames": [
      "Notebook"
    ],
    "aliases": [
      "IPython Notebook"
    ],
    "languageId": 185
  },
  "KRL": {
    "type": "programming",
    "color": "#28430A",
    "extensions": [
      ".krl"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 186
  },
  "Kaitai Struct": {
    "type": "programming",
    "aliases": [
      "ksy"
    ],
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "color": "#773b37",
    "extensions": [
      ".ksy"
    ],
    "tmScope": "source.yaml",
    "languageId": 818804755
  },
  "KakouneScript": {
    "type": "programming",
    "color": "#6f8042",
    "tmScope": "source.kakscript",
    "aliases": [
      "kak",
      "kakscript"
    ],
    "extensions": [
      ".kak"
    ],
    "filenames": [
      "kakrc"
    ],
    "aceMode": "text",
    "languageId": 603336474
  },
  "KiCad Layout": {
    "type": "data",
    "color": "#2f4aab",
    "aliases": [
      "pcbnew"
    ],
    "extensions": [
      ".kicad_pcb",
      ".kicad_mod",
      ".kicad_wks"
    ],
    "filenames": [
      "fp-lib-table"
    ],
    "tmScope": "source.pcb.sexp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 187
  },
  "KiCad Legacy Layout": {
    "type": "data",
    "color": "#2f4aab",
    "extensions": [
      ".brd"
    ],
    "tmScope": "source.pcb.board",
    "aceMode": "text",
    "languageId": 140848857
  },
  "KiCad Schematic": {
    "type": "data",
    "color": "#2f4aab",
    "aliases": [
      "eeschema schematic"
    ],
    "extensions": [
      ".sch"
    ],
    "tmScope": "source.pcb.schematic",
    "aceMode": "text",
    "languageId": 622447435
  },
  "Kit": {
    "type": "markup",
    "aceMode": "html",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "extensions": [
      ".kit"
    ],
    "tmScope": "text.html.basic",
    "languageId": 188
  },
  "Kotlin": {
    "type": "programming",
    "color": "#A97BFF",
    "extensions": [
      ".kt",
      ".ktm",
      ".kts"
    ],
    "tmScope": "source.kotlin",
    "aceMode": "text",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-kotlin",
    "languageId": 189
  },
  "Kusto": {
    "type": "data",
    "extensions": [
      ".csl"
    ],
    "tmScope": "source.kusto",
    "aceMode": "text",
    "languageId": 225697190
  },
  "LFE": {
    "type": "programming",
    "color": "#4C3023",
    "extensions": [
      ".lfe"
    ],
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 190
  },
  "LLVM": {
    "type": "programming",
    "extensions": [
      ".ll"
    ],
    "tmScope": "source.llvm",
    "aceMode": "text",
    "color": "#185619",
    "languageId": 191
  },
  "LOLCODE": {
    "type": "programming",
    "extensions": [
      ".lol"
    ],
    "color": "#cc9900",
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 192
  },
  "LSL": {
    "type": "programming",
    "tmScope": "source.lsl",
    "aceMode": "lsl",
    "extensions": [
      ".lsl",
      ".lslp"
    ],
    "interpreters": [
      "lsl"
    ],
    "color": "#3d9970",
    "languageId": 193
  },
  "LTspice Symbol": {
    "type": "data",
    "extensions": [
      ".asy"
    ],
    "tmScope": "source.ltspice.symbol",
    "aceMode": "text",
    "codemirrorMode": "spreadsheet",
    "codemirrorMimeType": "text/x-spreadsheet",
    "languageId": 1013566805
  },
  "LabVIEW": {
    "type": "programming",
    "color": "#fede06",
    "extensions": [
      ".lvproj",
      ".lvlib"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 194
  },
  "Lark": {
    "type": "data",
    "color": "#2980B9",
    "extensions": [
      ".lark"
    ],
    "tmScope": "source.lark",
    "aceMode": "text",
    "codemirrorMode": "ebnf",
    "codemirrorMimeType": "text/x-ebnf",
    "languageId": 758480799
  },
  "Lasso": {
    "type": "programming",
    "color": "#999999",
    "extensions": [
      ".lasso",
      ".las",
      ".lasso8",
      ".lasso9"
    ],
    "tmScope": "file.lasso",
    "aliases": [
      "lassoscript"
    ],
    "aceMode": "text",
    "languageId": 195
  },
  "Latte": {
    "type": "markup",
    "color": "#f2a542",
    "extensions": [
      ".latte"
    ],
    "tmScope": "text.html.smarty",
    "aceMode": "smarty",
    "codemirrorMode": "smarty",
    "codemirrorMimeType": "text/x-smarty",
    "languageId": 196
  },
  "Lean": {
    "type": "programming",
    "extensions": [
      ".lean",
      ".hlean"
    ],
    "tmScope": "source.lean",
    "aceMode": "text",
    "languageId": 197
  },
  "Less": {
    "type": "markup",
    "color": "#1d365d",
    "extensions": [
      ".less"
    ],
    "tmScope": "source.css.less",
    "aceMode": "less",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/css",
    "languageId": 198
  },
  "Lex": {
    "type": "programming",
    "color": "#DBCA00",
    "aliases": [
      "flex"
    ],
    "extensions": [
      ".l",
      ".lex"
    ],
    "filenames": [
      "Lexer.x",
      "lexer.x"
    ],
    "tmScope": "source.lex",
    "aceMode": "text",
    "languageId": 199
  },
  "LilyPond": {
    "type": "programming",
    "color": "#9ccc7c",
    "extensions": [
      ".ly",
      ".ily"
    ],
    "tmScope": "source.lilypond",
    "aceMode": "text",
    "languageId": 200
  },
  "Limbo": {
    "type": "programming",
    "extensions": [
      ".b",
      ".m"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 201
  },
  "Linker Script": {
    "type": "data",
    "extensions": [
      ".ld",
      ".lds",
      ".x"
    ],
    "filenames": [
      "ld.script"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 202
  },
  "Linux Kernel Module": {
    "type": "data",
    "extensions": [
      ".mod"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 203
  },
  "Liquid": {
    "type": "markup",
    "color": "#67b8de",
    "extensions": [
      ".liquid"
    ],
    "tmScope": "text.html.liquid",
    "aceMode": "liquid",
    "languageId": 204
  },
  "Literate Agda": {
    "type": "programming",
    "color": "#315665",
    "group": "Agda",
    "extensions": [
      ".lagda"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 205
  },
  "Literate CoffeeScript": {
    "type": "programming",
    "color": "#244776",
    "tmScope": "source.litcoffee",
    "group": "CoffeeScript",
    "aceMode": "text",
    "wrap": true,
    "aliases": [
      "litcoffee"
    ],
    "extensions": [
      ".litcoffee",
      ".coffee.md"
    ],
    "languageId": 206
  },
  "Literate Haskell": {
    "type": "programming",
    "color": "#5e5086",
    "group": "Haskell",
    "aliases": [
      "lhaskell",
      "lhs"
    ],
    "extensions": [
      ".lhs"
    ],
    "tmScope": "text.tex.latex.haskell",
    "aceMode": "text",
    "codemirrorMode": "haskell-literate",
    "codemirrorMimeType": "text/x-literate-haskell",
    "languageId": 207
  },
  "LiveScript": {
    "type": "programming",
    "color": "#499886",
    "aliases": [
      "live-script",
      "ls"
    ],
    "extensions": [
      ".ls",
      "._ls"
    ],
    "filenames": [
      "Slakefile"
    ],
    "tmScope": "source.livescript",
    "aceMode": "livescript",
    "codemirrorMode": "livescript",
    "codemirrorMimeType": "text/x-livescript",
    "languageId": 208
  },
  "Logos": {
    "type": "programming",
    "extensions": [
      ".xm",
      ".x",
      ".xi"
    ],
    "aceMode": "text",
    "tmScope": "source.logos",
    "languageId": 209
  },
  "Logtalk": {
    "type": "programming",
    "color": "#295b9a",
    "extensions": [
      ".lgt",
      ".logtalk"
    ],
    "tmScope": "source.logtalk",
    "aceMode": "text",
    "languageId": 210
  },
  "LookML": {
    "type": "programming",
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "color": "#652B81",
    "extensions": [
      ".lookml",
      ".model.lkml",
      ".view.lkml"
    ],
    "tmScope": "source.yaml",
    "languageId": 211
  },
  "LoomScript": {
    "type": "programming",
    "extensions": [
      ".ls"
    ],
    "tmScope": "source.loomscript",
    "aceMode": "text",
    "languageId": 212
  },
  "Lua": {
    "type": "programming",
    "tmScope": "source.lua",
    "aceMode": "lua",
    "codemirrorMode": "lua",
    "codemirrorMimeType": "text/x-lua",
    "color": "#000080",
    "extensions": [
      ".lua",
      ".fcgi",
      ".nse",
      ".p8",
      ".pd_lua",
      ".rbxs",
      ".rockspec",
      ".wlua"
    ],
    "filenames": [
      ".luacheckrc"
    ],
    "interpreters": [
      "lua"
    ],
    "languageId": 213
  },
  "M": {
    "type": "programming",
    "aliases": [
      "mumps"
    ],
    "extensions": [
      ".mumps",
      ".m"
    ],
    "aceMode": "text",
    "codemirrorMode": "mumps",
    "codemirrorMimeType": "text/x-mumps",
    "languageId": 214,
    "tmScope": "none"
  },
  "M4": {
    "type": "programming",
    "extensions": [
      ".m4"
    ],
    "tmScope": "source.m4",
    "aceMode": "text",
    "languageId": 215
  },
  "M4Sugar": {
    "type": "programming",
    "group": "M4",
    "aliases": [
      "autoconf"
    ],
    "extensions": [
      ".m4"
    ],
    "filenames": [
      "configure.ac"
    ],
    "tmScope": "source.m4",
    "aceMode": "text",
    "languageId": 216
  },
  "MATLAB": {
    "type": "programming",
    "color": "#e16737",
    "aliases": [
      "octave"
    ],
    "extensions": [
      ".matlab",
      ".m"
    ],
    "tmScope": "source.matlab",
    "aceMode": "matlab",
    "codemirrorMode": "octave",
    "codemirrorMimeType": "text/x-octave",
    "languageId": 225
  },
  "MAXScript": {
    "type": "programming",
    "color": "#00a6a6",
    "extensions": [
      ".ms",
      ".mcr"
    ],
    "tmScope": "source.maxscript",
    "aceMode": "text",
    "languageId": 217
  },
  "MLIR": {
    "type": "programming",
    "color": "#5EC8DB",
    "extensions": [
      ".mlir"
    ],
    "tmScope": "source.mlir",
    "aceMode": "text",
    "languageId": 448253929
  },
  "MQL4": {
    "type": "programming",
    "color": "#62A8D6",
    "extensions": [
      ".mq4",
      ".mqh"
    ],
    "tmScope": "source.mql5",
    "aceMode": "c_cpp",
    "languageId": 426
  },
  "MQL5": {
    "type": "programming",
    "color": "#4A76B8",
    "extensions": [
      ".mq5",
      ".mqh"
    ],
    "tmScope": "source.mql5",
    "aceMode": "c_cpp",
    "languageId": 427
  },
  "MTML": {
    "type": "markup",
    "color": "#b7e1f4",
    "extensions": [
      ".mtml"
    ],
    "tmScope": "text.html.basic",
    "aceMode": "html",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 218
  },
  "MUF": {
    "type": "programming",
    "group": "Forth",
    "extensions": [
      ".muf",
      ".m"
    ],
    "tmScope": "none",
    "aceMode": "forth",
    "codemirrorMode": "forth",
    "codemirrorMimeType": "text/x-forth",
    "languageId": 219
  },
  "Macaulay2": {
    "type": "programming",
    "extensions": [
      ".m2"
    ],
    "aliases": [
      "m2"
    ],
    "interpreters": [
      "M2"
    ],
    "aceMode": "text",
    "tmScope": "source.m2",
    "color": "#d8ffff",
    "languageId": 34167825
  },
  "Makefile": {
    "type": "programming",
    "color": "#427819",
    "aliases": [
      "bsdmake",
      "make",
      "mf"
    ],
    "extensions": [
      ".mak",
      ".d",
      ".make",
      ".makefile",
      ".mk",
      ".mkfile"
    ],
    "filenames": [
      "BSDmakefile",
      "GNUmakefile",
      "Kbuild",
      "Makefile",
      "Makefile.am",
      "Makefile.boot",
      "Makefile.frag",
      "Makefile.in",
      "Makefile.inc",
      "Makefile.wat",
      "makefile",
      "makefile.sco",
      "mkfile"
    ],
    "interpreters": [
      "make"
    ],
    "tmScope": "source.makefile",
    "aceMode": "makefile",
    "codemirrorMode": "cmake",
    "codemirrorMimeType": "text/x-cmake",
    "languageId": 220
  },
  "Mako": {
    "type": "programming",
    "color": "#7e858d",
    "extensions": [
      ".mako",
      ".mao"
    ],
    "tmScope": "text.html.mako",
    "aceMode": "text",
    "languageId": 221
  },
  "Marko": {
    "type": "markup",
    "color": "#42bff2",
    "tmScope": "text.marko",
    "extensions": [
      ".marko"
    ],
    "aliases": [
      "markojs"
    ],
    "aceMode": "text",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 932782397
  },
  "Mask": {
    "type": "markup",
    "color": "#f97732",
    "aceMode": "mask",
    "extensions": [
      ".mask"
    ],
    "tmScope": "source.mask",
    "languageId": 223
  },
  "Mathematica": {
    "type": "programming",
    "color": "#dd1100",
    "extensions": [
      ".mathematica",
      ".cdf",
      ".m",
      ".ma",
      ".mt",
      ".nb",
      ".nbp",
      ".wl",
      ".wlt"
    ],
    "aliases": [
      "mma",
      "wolfram",
      "wolfram language",
      "wolfram lang",
      "wl"
    ],
    "tmScope": "source.mathematica",
    "aceMode": "text",
    "codemirrorMode": "mathematica",
    "codemirrorMimeType": "text/x-mathematica",
    "languageId": 224
  },
  "Maven POM": {
    "type": "data",
    "group": "XML",
    "tmScope": "text.xml.pom",
    "filenames": [
      "pom.xml"
    ],
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 226
  },
  "Max": {
    "type": "programming",
    "color": "#c4a79c",
    "aliases": [
      "max/msp",
      "maxmsp"
    ],
    "extensions": [
      ".maxpat",
      ".maxhelp",
      ".maxproj",
      ".mxt",
      ".pat"
    ],
    "tmScope": "source.json",
    "aceMode": "json",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/json",
    "languageId": 227
  },
  "Mercury": {
    "type": "programming",
    "color": "#ff2b2b",
    "aceMode": "prolog",
    "interpreters": [
      "mmi"
    ],
    "extensions": [
      ".m",
      ".moo"
    ],
    "tmScope": "source.mercury",
    "languageId": 229
  },
  "Meson": {
    "type": "programming",
    "color": "#007800",
    "filenames": [
      "meson.build",
      "meson_options.txt"
    ],
    "tmScope": "source.meson",
    "aceMode": "text",
    "languageId": 799141244
  },
  "Metal": {
    "type": "programming",
    "color": "#8f14e9",
    "extensions": [
      ".metal"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 230
  },
  "Microsoft Developer Studio Project": {
    "type": "data",
    "extensions": [
      ".dsp"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 800983837
  },
  "Microsoft Visual Studio Solution": {
    "type": "data",
    "extensions": [
      ".sln"
    ],
    "tmScope": "source.solution",
    "aceMode": "text",
    "languageId": 849523096
  },
  "MiniD": {
    "type": "programming",
    "extensions": [
      ".minid"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 231
  },
  "Mirah": {
    "type": "programming",
    "color": "#c7a938",
    "extensions": [
      ".druby",
      ".duby",
      ".mirah"
    ],
    "tmScope": "source.ruby",
    "aceMode": "ruby",
    "codemirrorMode": "ruby",
    "codemirrorMimeType": "text/x-ruby",
    "languageId": 232
  },
  "Modelica": {
    "type": "programming",
    "color": "#de1d31",
    "extensions": [
      ".mo"
    ],
    "tmScope": "source.modelica",
    "aceMode": "text",
    "codemirrorMode": "modelica",
    "codemirrorMimeType": "text/x-modelica",
    "languageId": 233
  },
  "Modula-2": {
    "type": "programming",
    "color": "#10253f",
    "extensions": [
      ".mod"
    ],
    "tmScope": "source.modula2",
    "aceMode": "text",
    "languageId": 234
  },
  "Modula-3": {
    "type": "programming",
    "extensions": [
      ".i3",
      ".ig",
      ".m3",
      ".mg"
    ],
    "color": "#223388",
    "aceMode": "text",
    "tmScope": "source.modula-3",
    "languageId": 564743864
  },
  "Module Management System": {
    "type": "programming",
    "extensions": [
      ".mms",
      ".mmk"
    ],
    "filenames": [
      "descrip.mmk",
      "descrip.mms"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 235
  },
  "Monkey": {
    "type": "programming",
    "extensions": [
      ".monkey",
      ".monkey2"
    ],
    "aceMode": "text",
    "tmScope": "source.monkey",
    "languageId": 236
  },
  "Moocode": {
    "type": "programming",
    "extensions": [
      ".moo"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 237
  },
  "MoonScript": {
    "type": "programming",
    "color": "#ff4585",
    "extensions": [
      ".moon"
    ],
    "interpreters": [
      "moon"
    ],
    "tmScope": "source.moonscript",
    "aceMode": "text",
    "languageId": 238
  },
  "Motorola 68K Assembly": {
    "type": "programming",
    "color": "#005daa",
    "group": "Assembly",
    "aliases": [
      "m68k"
    ],
    "extensions": [
      ".asm",
      ".i",
      ".inc",
      ".s",
      ".x68"
    ],
    "tmScope": "source.m68k",
    "aceMode": "assembly_x86",
    "languageId": 477582706
  },
  "Muse": {
    "type": "prose",
    "extensions": [
      ".muse"
    ],
    "tmScope": "text.muse",
    "aceMode": "text",
    "wrap": true,
    "languageId": 474864066,
    "aliases": [
      "amusewiki",
      "emacs muse"
    ]
  },
  "Mustache": {
    "type": "markup",
    "color": "#724b3b",
    "extensions": [
      ".mustache"
    ],
    "tmScope": "text.html.smarty",
    "aceMode": "smarty",
    "codemirrorMode": "smarty",
    "codemirrorMimeType": "text/x-smarty",
    "languageId": 638334590
  },
  "Myghty": {
    "type": "programming",
    "extensions": [
      ".myt"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 239
  },
  "NASL": {
    "type": "programming",
    "extensions": [
      ".nasl",
      ".inc"
    ],
    "tmScope": "source.nasl",
    "aceMode": "text",
    "languageId": 171666519
  },
  "NCL": {
    "type": "programming",
    "color": "#28431f",
    "extensions": [
      ".ncl"
    ],
    "tmScope": "source.ncl",
    "aceMode": "text",
    "languageId": 240
  },
  "NEON": {
    "type": "data",
    "extensions": [
      ".neon"
    ],
    "tmScope": "source.neon",
    "aceMode": "text",
    "aliases": [
      "nette object notation",
      "ne-on"
    ],
    "languageId": 481192983
  },
  "NL": {
    "type": "data",
    "extensions": [
      ".nl"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 241
  },
  "NPM Config": {
    "type": "data",
    "color": "#cb3837",
    "group": "INI",
    "aliases": [
      "npmrc"
    ],
    "filenames": [
      ".npmrc"
    ],
    "tmScope": "source.ini.npmrc",
    "aceMode": "text",
    "languageId": 685022663
  },
  "NSIS": {
    "type": "programming",
    "extensions": [
      ".nsi",
      ".nsh"
    ],
    "tmScope": "source.nsis",
    "aceMode": "text",
    "codemirrorMode": "nsis",
    "codemirrorMimeType": "text/x-nsis",
    "languageId": 242
  },
  "NWScript": {
    "type": "programming",
    "color": "#111522",
    "extensions": [
      ".nss"
    ],
    "tmScope": "source.c.nwscript",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 731233819
  },
  "Nearley": {
    "type": "programming",
    "aceMode": "text",
    "color": "#990000",
    "extensions": [
      ".ne",
      ".nearley"
    ],
    "tmScope": "source.ne",
    "languageId": 521429430
  },
  "Nemerle": {
    "type": "programming",
    "color": "#3d3c6e",
    "extensions": [
      ".n"
    ],
    "tmScope": "source.nemerle",
    "aceMode": "text",
    "languageId": 243
  },
  "NetLinx": {
    "type": "programming",
    "color": "#0aa0ff",
    "extensions": [
      ".axs",
      ".axi"
    ],
    "tmScope": "source.netlinx",
    "aceMode": "text",
    "languageId": 244
  },
  "NetLinx+ERB": {
    "type": "programming",
    "color": "#747faa",
    "extensions": [
      ".axs.erb",
      ".axi.erb"
    ],
    "tmScope": "source.netlinx.erb",
    "aceMode": "text",
    "languageId": 245
  },
  "NetLogo": {
    "type": "programming",
    "color": "#ff6375",
    "extensions": [
      ".nlogo"
    ],
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 246
  },
  "NewLisp": {
    "type": "programming",
    "color": "#87AED7",
    "extensions": [
      ".nl",
      ".lisp",
      ".lsp"
    ],
    "interpreters": [
      "newlisp"
    ],
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 247
  },
  "Nextflow": {
    "type": "programming",
    "aceMode": "groovy",
    "tmScope": "source.nextflow",
    "color": "#3ac486",
    "extensions": [
      ".nf"
    ],
    "filenames": [
      "nextflow.config"
    ],
    "interpreters": [
      "nextflow"
    ],
    "languageId": 506780613
  },
  "Nginx": {
    "type": "data",
    "color": "#009639",
    "extensions": [
      ".nginx",
      ".nginxconf",
      ".vhost"
    ],
    "filenames": [
      "nginx.conf"
    ],
    "tmScope": "source.nginx",
    "aliases": [
      "nginx configuration file"
    ],
    "aceMode": "text",
    "codemirrorMode": "nginx",
    "codemirrorMimeType": "text/x-nginx-conf",
    "languageId": 248
  },
  "Nim": {
    "type": "programming",
    "color": "#ffc200",
    "extensions": [
      ".nim",
      ".nim.cfg",
      ".nimble",
      ".nimrod",
      ".nims"
    ],
    "filenames": [
      "nim.cfg"
    ],
    "aceMode": "text",
    "tmScope": "source.nim",
    "languageId": 249
  },
  "Ninja": {
    "type": "data",
    "tmScope": "source.ninja",
    "extensions": [
      ".ninja"
    ],
    "aceMode": "text",
    "languageId": 250
  },
  "Nit": {
    "type": "programming",
    "color": "#009917",
    "extensions": [
      ".nit"
    ],
    "tmScope": "source.nit",
    "aceMode": "text",
    "languageId": 251
  },
  "Nix": {
    "type": "programming",
    "color": "#7e7eff",
    "extensions": [
      ".nix"
    ],
    "aliases": [
      "nixos"
    ],
    "tmScope": "source.nix",
    "aceMode": "nix",
    "languageId": 252
  },
  "Nu": {
    "type": "programming",
    "color": "#c9df40",
    "aliases": [
      "nush"
    ],
    "extensions": [
      ".nu"
    ],
    "filenames": [
      "Nukefile"
    ],
    "tmScope": "source.nu",
    "aceMode": "scheme",
    "codemirrorMode": "scheme",
    "codemirrorMimeType": "text/x-scheme",
    "interpreters": [
      "nush"
    ],
    "languageId": 253
  },
  "NumPy": {
    "type": "programming",
    "color": "#9C8AF9",
    "group": "Python",
    "extensions": [
      ".numpy",
      ".numpyw",
      ".numsc"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "languageId": 254
  },
  "Nunjucks": {
    "type": "markup",
    "color": "#3d8137",
    "extensions": [
      ".njk"
    ],
    "aliases": [
      "njk"
    ],
    "tmScope": "text.html.nunjucks",
    "aceMode": "nunjucks",
    "languageId": 461856962
  },
  "OCaml": {
    "type": "programming",
    "aceMode": "ocaml",
    "codemirrorMode": "mllike",
    "codemirrorMimeType": "text/x-ocaml",
    "color": "#3be133",
    "extensions": [
      ".ml",
      ".eliom",
      ".eliomi",
      ".ml4",
      ".mli",
      ".mll",
      ".mly"
    ],
    "interpreters": [
      "ocaml",
      "ocamlrun",
      "ocamlscript"
    ],
    "tmScope": "source.ocaml",
    "languageId": 255
  },
  "ObjDump": {
    "type": "data",
    "extensions": [
      ".objdump"
    ],
    "tmScope": "objdump.x86asm",
    "aceMode": "assembly_x86",
    "languageId": 256
  },
  "Object Data Instance Notation": {
    "type": "data",
    "extensions": [
      ".odin"
    ],
    "tmScope": "source.odin-ehr",
    "aceMode": "text",
    "languageId": 985227236
  },
  "ObjectScript": {
    "type": "programming",
    "extensions": [
      ".cls"
    ],
    "languageId": 202735509,
    "tmScope": "source.objectscript",
    "color": "#424893",
    "aceMode": "text"
  },
  "Objective-C": {
    "type": "programming",
    "tmScope": "source.objc",
    "color": "#438eff",
    "aliases": [
      "obj-c",
      "objc",
      "objectivec"
    ],
    "extensions": [
      ".m",
      ".h"
    ],
    "aceMode": "objectivec",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-objectivec",
    "languageId": 257
  },
  "Objective-C++": {
    "type": "programming",
    "tmScope": "source.objc++",
    "color": "#6866fb",
    "aliases": [
      "obj-c++",
      "objc++",
      "objectivec++"
    ],
    "extensions": [
      ".mm"
    ],
    "aceMode": "objectivec",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-objectivec",
    "languageId": 258
  },
  "Objective-J": {
    "type": "programming",
    "color": "#ff0c5a",
    "aliases": [
      "obj-j",
      "objectivej",
      "objj"
    ],
    "extensions": [
      ".j",
      ".sj"
    ],
    "tmScope": "source.js.objj",
    "aceMode": "text",
    "languageId": 259
  },
  "Odin": {
    "type": "programming",
    "color": "#60AFFE",
    "aliases": [
      "odinlang",
      "odin-lang"
    ],
    "extensions": [
      ".odin"
    ],
    "tmScope": "source.odin",
    "aceMode": "text",
    "languageId": 889244082
  },
  "Omgrofl": {
    "type": "programming",
    "extensions": [
      ".omgrofl"
    ],
    "color": "#cabbff",
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 260
  },
  "Opa": {
    "type": "programming",
    "extensions": [
      ".opa"
    ],
    "tmScope": "source.opa",
    "aceMode": "text",
    "languageId": 261
  },
  "Opal": {
    "type": "programming",
    "color": "#f7ede0",
    "extensions": [
      ".opal"
    ],
    "tmScope": "source.opal",
    "aceMode": "text",
    "languageId": 262
  },
  "Open Policy Agent": {
    "type": "programming",
    "color": "#7d9199",
    "aceMode": "text",
    "extensions": [
      ".rego"
    ],
    "languageId": 840483232,
    "tmScope": "source.rego"
  },
  "OpenCL": {
    "type": "programming",
    "color": "#ed2e2d",
    "group": "C",
    "extensions": [
      ".cl",
      ".opencl"
    ],
    "tmScope": "source.c",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 263
  },
  "OpenEdge ABL": {
    "type": "programming",
    "color": "#5ce600",
    "aliases": [
      "progress",
      "openedge",
      "abl"
    ],
    "extensions": [
      ".p",
      ".cls",
      ".w"
    ],
    "tmScope": "source.abl",
    "aceMode": "text",
    "languageId": 264
  },
  "OpenQASM": {
    "type": "programming",
    "extensions": [
      ".qasm"
    ],
    "color": "#AA70FF",
    "tmScope": "source.qasm",
    "aceMode": "text",
    "languageId": 153739399
  },
  "OpenRC runscript": {
    "type": "programming",
    "group": "Shell",
    "aliases": [
      "openrc"
    ],
    "interpreters": [
      "openrc-run"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 265
  },
  "OpenSCAD": {
    "type": "programming",
    "color": "#e5cd45",
    "extensions": [
      ".scad"
    ],
    "tmScope": "source.scad",
    "aceMode": "scad",
    "languageId": 266
  },
  "OpenStep Property List": {
    "type": "data",
    "extensions": [
      ".plist",
      ".glyphs"
    ],
    "tmScope": "source.plist",
    "aceMode": "text",
    "languageId": 598917541
  },
  "OpenType Feature File": {
    "type": "data",
    "aliases": [
      "AFDKO"
    ],
    "extensions": [
      ".fea"
    ],
    "tmScope": "source.opentype",
    "aceMode": "text",
    "languageId": 374317347
  },
  "Org": {
    "type": "prose",
    "color": "#77aa99",
    "wrap": true,
    "extensions": [
      ".org"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 267
  },
  "Ox": {
    "type": "programming",
    "extensions": [
      ".ox",
      ".oxh",
      ".oxo"
    ],
    "tmScope": "source.ox",
    "aceMode": "text",
    "languageId": 268
  },
  "Oxygene": {
    "type": "programming",
    "color": "#cdd0e3",
    "extensions": [
      ".oxygene"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 269
  },
  "Oz": {
    "type": "programming",
    "color": "#fab738",
    "extensions": [
      ".oz"
    ],
    "tmScope": "source.oz",
    "aceMode": "text",
    "codemirrorMode": "oz",
    "codemirrorMimeType": "text/x-oz",
    "languageId": 270
  },
  "P4": {
    "type": "programming",
    "color": "#7055b5",
    "extensions": [
      ".p4"
    ],
    "tmScope": "source.p4",
    "aceMode": "text",
    "languageId": 348895984
  },
  "PEG.js": {
    "type": "programming",
    "color": "#234d6b",
    "extensions": [
      ".pegjs"
    ],
    "tmScope": "source.pegjs",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "languageId": 81442128
  },
  "PHP": {
    "type": "programming",
    "tmScope": "text.html.php",
    "aceMode": "php",
    "codemirrorMode": "php",
    "codemirrorMimeType": "application/x-httpd-php",
    "color": "#4F5D95",
    "extensions": [
      ".php",
      ".aw",
      ".ctp",
      ".fcgi",
      ".inc",
      ".php3",
      ".php4",
      ".php5",
      ".phps",
      ".phpt"
    ],
    "filenames": [
      ".php",
      ".php_cs",
      ".php_cs.dist",
      "Phakefile"
    ],
    "interpreters": [
      "php"
    ],
    "aliases": [
      "inc"
    ],
    "languageId": 272
  },
  "PLSQL": {
    "type": "programming",
    "aceMode": "sql",
    "codemirrorMode": "sql",
    "codemirrorMimeType": "text/x-plsql",
    "tmScope": "none",
    "color": "#dad8d8",
    "extensions": [
      ".pls",
      ".bdy",
      ".ddl",
      ".fnc",
      ".pck",
      ".pkb",
      ".pks",
      ".plb",
      ".plsql",
      ".prc",
      ".spc",
      ".sql",
      ".tpb",
      ".tps",
      ".trg",
      ".vw"
    ],
    "languageId": 273
  },
  "PLpgSQL": {
    "type": "programming",
    "color": "#336790",
    "aceMode": "pgsql",
    "codemirrorMode": "sql",
    "codemirrorMimeType": "text/x-sql",
    "tmScope": "source.sql",
    "extensions": [
      ".pgsql",
      ".sql"
    ],
    "languageId": 274
  },
  "POV-Ray SDL": {
    "type": "programming",
    "color": "#6bac65",
    "aliases": [
      "pov-ray",
      "povray"
    ],
    "extensions": [
      ".pov",
      ".inc"
    ],
    "tmScope": "source.pov-ray sdl",
    "aceMode": "text",
    "languageId": 275
  },
  "Pan": {
    "type": "programming",
    "color": "#cc0000",
    "extensions": [
      ".pan"
    ],
    "tmScope": "source.pan",
    "aceMode": "text",
    "languageId": 276
  },
  "Papyrus": {
    "type": "programming",
    "color": "#6600cc",
    "extensions": [
      ".psc"
    ],
    "tmScope": "source.papyrus.skyrim",
    "aceMode": "text",
    "languageId": 277
  },
  "Parrot": {
    "type": "programming",
    "color": "#f3ca0a",
    "extensions": [
      ".parrot"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 278
  },
  "Parrot Assembly": {
    "group": "Parrot",
    "type": "programming",
    "aliases": [
      "pasm"
    ],
    "extensions": [
      ".pasm"
    ],
    "interpreters": [
      "parrot"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 279
  },
  "Parrot Internal Representation": {
    "group": "Parrot",
    "tmScope": "source.parrot.pir",
    "type": "programming",
    "aliases": [
      "pir"
    ],
    "extensions": [
      ".pir"
    ],
    "interpreters": [
      "parrot"
    ],
    "aceMode": "text",
    "languageId": 280
  },
  "Pascal": {
    "type": "programming",
    "color": "#E3F171",
    "aliases": [
      "delphi",
      "objectpascal"
    ],
    "extensions": [
      ".pas",
      ".dfm",
      ".dpr",
      ".inc",
      ".lpr",
      ".pascal",
      ".pp"
    ],
    "interpreters": [
      "instantfpc"
    ],
    "tmScope": "source.pascal",
    "aceMode": "pascal",
    "codemirrorMode": "pascal",
    "codemirrorMimeType": "text/x-pascal",
    "languageId": 281
  },
  "Pawn": {
    "type": "programming",
    "color": "#dbb284",
    "extensions": [
      ".pwn",
      ".inc",
      ".sma"
    ],
    "tmScope": "source.pawn",
    "aceMode": "text",
    "languageId": 271
  },
  "Pep8": {
    "type": "programming",
    "color": "#C76F5B",
    "extensions": [
      ".pep"
    ],
    "aceMode": "text",
    "tmScope": "source.pep8",
    "languageId": 840372442
  },
  "Perl": {
    "type": "programming",
    "tmScope": "source.perl",
    "aceMode": "perl",
    "codemirrorMode": "perl",
    "codemirrorMimeType": "text/x-perl",
    "color": "#0298c3",
    "extensions": [
      ".pl",
      ".al",
      ".cgi",
      ".fcgi",
      ".perl",
      ".ph",
      ".plx",
      ".pm",
      ".psgi",
      ".t"
    ],
    "filenames": [
      "Makefile.PL",
      "Rexfile",
      "ack",
      "cpanfile"
    ],
    "interpreters": [
      "cperl",
      "perl"
    ],
    "aliases": [
      "cperl"
    ],
    "languageId": 282
  },
  "Pic": {
    "type": "markup",
    "group": "Roff",
    "tmScope": "source.pic",
    "extensions": [
      ".pic",
      ".chem"
    ],
    "aceMode": "text",
    "codemirrorMode": "troff",
    "codemirrorMimeType": "text/troff",
    "languageId": 425
  },
  "Pickle": {
    "type": "data",
    "extensions": [
      ".pkl"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 284
  },
  "PicoLisp": {
    "type": "programming",
    "color": "#6067af",
    "extensions": [
      ".l"
    ],
    "interpreters": [
      "picolisp",
      "pil"
    ],
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "languageId": 285
  },
  "PigLatin": {
    "type": "programming",
    "color": "#fcd7de",
    "extensions": [
      ".pig"
    ],
    "tmScope": "source.pig_latin",
    "aceMode": "text",
    "languageId": 286
  },
  "Pike": {
    "type": "programming",
    "color": "#005390",
    "extensions": [
      ".pike",
      ".pmod"
    ],
    "interpreters": [
      "pike"
    ],
    "tmScope": "source.pike",
    "aceMode": "text",
    "languageId": 287
  },
  "PlantUML": {
    "type": "data",
    "extensions": [
      ".puml",
      ".iuml",
      ".plantuml"
    ],
    "tmScope": "source.wsd",
    "aceMode": "text",
    "languageId": 833504686
  },
  "Pod": {
    "type": "prose",
    "aceMode": "perl",
    "codemirrorMode": "perl",
    "codemirrorMimeType": "text/x-perl",
    "wrap": true,
    "extensions": [
      ".pod"
    ],
    "interpreters": [
      "perl"
    ],
    "tmScope": "none",
    "languageId": 288
  },
  "Pod 6": {
    "type": "prose",
    "aceMode": "perl",
    "tmScope": "source.raku",
    "wrap": true,
    "extensions": [
      ".pod",
      ".pod6"
    ],
    "interpreters": [
      "perl6"
    ],
    "languageId": 155357471
  },
  "PogoScript": {
    "type": "programming",
    "color": "#d80074",
    "extensions": [
      ".pogo"
    ],
    "tmScope": "source.pogoscript",
    "aceMode": "text",
    "languageId": 289
  },
  "Pony": {
    "type": "programming",
    "extensions": [
      ".pony"
    ],
    "tmScope": "source.pony",
    "aceMode": "text",
    "languageId": 290
  },
  "PostCSS": {
    "type": "markup",
    "color": "#dc3a0c",
    "tmScope": "source.postcss",
    "group": "CSS",
    "extensions": [
      ".pcss",
      ".postcss"
    ],
    "aceMode": "text",
    "languageId": 262764437
  },
  "PostScript": {
    "type": "markup",
    "color": "#da291c",
    "extensions": [
      ".ps",
      ".eps",
      ".epsi",
      ".pfa"
    ],
    "tmScope": "source.postscript",
    "aliases": [
      "postscr"
    ],
    "aceMode": "text",
    "languageId": 291
  },
  "PowerBuilder": {
    "type": "programming",
    "color": "#8f0f8d",
    "extensions": [
      ".pbt",
      ".sra",
      ".sru",
      ".srw"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 292
  },
  "PowerShell": {
    "type": "programming",
    "color": "#012456",
    "tmScope": "source.powershell",
    "aceMode": "powershell",
    "codemirrorMode": "powershell",
    "codemirrorMimeType": "application/x-powershell",
    "aliases": [
      "posh",
      "pwsh"
    ],
    "extensions": [
      ".ps1",
      ".psd1",
      ".psm1"
    ],
    "interpreters": [
      "pwsh"
    ],
    "languageId": 293
  },
  "Prisma": {
    "type": "data",
    "color": "#0c344b",
    "extensions": [
      ".prisma"
    ],
    "tmScope": "source.prisma",
    "aceMode": "text",
    "languageId": 499933428
  },
  "Processing": {
    "type": "programming",
    "color": "#0096D8",
    "extensions": [
      ".pde"
    ],
    "tmScope": "source.processing",
    "aceMode": "text",
    "languageId": 294
  },
  "Proguard": {
    "type": "data",
    "extensions": [
      ".pro"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 716513858
  },
  "Prolog": {
    "type": "programming",
    "color": "#74283c",
    "extensions": [
      ".pl",
      ".pro",
      ".prolog",
      ".yap"
    ],
    "interpreters": [
      "swipl",
      "yap"
    ],
    "tmScope": "source.prolog",
    "aceMode": "prolog",
    "languageId": 295
  },
  "Propeller Spin": {
    "type": "programming",
    "color": "#7fa2a7",
    "extensions": [
      ".spin"
    ],
    "tmScope": "source.spin",
    "aceMode": "text",
    "languageId": 296
  },
  "Protocol Buffer": {
    "type": "data",
    "aliases": [
      "protobuf",
      "Protocol Buffers"
    ],
    "extensions": [
      ".proto"
    ],
    "tmScope": "source.proto",
    "aceMode": "protobuf",
    "codemirrorMode": "protobuf",
    "codemirrorMimeType": "text/x-protobuf",
    "languageId": 297
  },
  "Public Key": {
    "type": "data",
    "extensions": [
      ".asc",
      ".pub"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "codemirrorMode": "asciiarmor",
    "codemirrorMimeType": "application/pgp",
    "languageId": 298
  },
  "Pug": {
    "type": "markup",
    "color": "#a86454",
    "extensions": [
      ".jade",
      ".pug"
    ],
    "tmScope": "text.jade",
    "aceMode": "jade",
    "codemirrorMode": "pug",
    "codemirrorMimeType": "text/x-pug",
    "languageId": 179
  },
  "Puppet": {
    "type": "programming",
    "color": "#302B6D",
    "extensions": [
      ".pp"
    ],
    "filenames": [
      "Modulefile"
    ],
    "aceMode": "text",
    "codemirrorMode": "puppet",
    "codemirrorMimeType": "text/x-puppet",
    "tmScope": "source.puppet",
    "languageId": 299
  },
  "Pure Data": {
    "type": "data",
    "extensions": [
      ".pd"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 300
  },
  "PureBasic": {
    "type": "programming",
    "color": "#5a6986",
    "extensions": [
      ".pb",
      ".pbi"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 301
  },
  "PureScript": {
    "type": "programming",
    "color": "#1D222D",
    "extensions": [
      ".purs"
    ],
    "tmScope": "source.purescript",
    "aceMode": "haskell",
    "codemirrorMode": "haskell",
    "codemirrorMimeType": "text/x-haskell",
    "languageId": 302
  },
  "Python": {
    "type": "programming",
    "tmScope": "source.python",
    "aceMode": "python",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "color": "#3572A5",
    "extensions": [
      ".py",
      ".cgi",
      ".fcgi",
      ".gyp",
      ".gypi",
      ".lmi",
      ".py3",
      ".pyde",
      ".pyi",
      ".pyp",
      ".pyt",
      ".pyw",
      ".rpy",
      ".smk",
      ".spec",
      ".tac",
      ".wsgi",
      ".xpy"
    ],
    "filenames": [
      ".gclient",
      "DEPS",
      "SConscript",
      "SConstruct",
      "Snakefile",
      "wscript"
    ],
    "interpreters": [
      "python",
      "python2",
      "python3"
    ],
    "aliases": [
      "python3",
      "rusthon"
    ],
    "languageId": 303
  },
  "Python console": {
    "type": "programming",
    "color": "#3572A5",
    "group": "Python",
    "aliases": [
      "pycon"
    ],
    "tmScope": "text.python.console",
    "aceMode": "text",
    "languageId": 428
  },
  "Python traceback": {
    "type": "data",
    "color": "#3572A5",
    "group": "Python",
    "extensions": [
      ".pytb"
    ],
    "tmScope": "text.python.traceback",
    "aceMode": "text",
    "languageId": 304
  },
  "Q#": {
    "type": "programming",
    "extensions": [
      ".qs"
    ],
    "aliases": [
      "qsharp"
    ],
    "color": "#fed659",
    "aceMode": "text",
    "tmScope": "source.qsharp",
    "languageId": 697448245
  },
  "QML": {
    "type": "programming",
    "color": "#44a51c",
    "extensions": [
      ".qml",
      ".qbs"
    ],
    "tmScope": "source.qml",
    "aceMode": "text",
    "languageId": 305
  },
  "QMake": {
    "type": "programming",
    "extensions": [
      ".pro",
      ".pri"
    ],
    "interpreters": [
      "qmake"
    ],
    "tmScope": "source.qmake",
    "aceMode": "text",
    "languageId": 306
  },
  "Qt Script": {
    "type": "programming",
    "aceMode": "javascript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "text/javascript",
    "extensions": [
      ".qs"
    ],
    "filenames": [
      "installscript.qs",
      "toolchain_installscript.qs"
    ],
    "color": "#00b841",
    "tmScope": "source.js",
    "languageId": 558193693
  },
  "Quake": {
    "type": "programming",
    "filenames": [
      "m3makefile",
      "m3overrides"
    ],
    "color": "#882233",
    "aceMode": "text",
    "tmScope": "source.quake",
    "languageId": 375265331
  },
  "R": {
    "type": "programming",
    "color": "#198CE7",
    "aliases": [
      "R",
      "Rscript",
      "splus"
    ],
    "extensions": [
      ".r",
      ".rd",
      ".rsx"
    ],
    "filenames": [
      ".Rprofile",
      "expr-dist"
    ],
    "interpreters": [
      "Rscript"
    ],
    "tmScope": "source.r",
    "aceMode": "r",
    "codemirrorMode": "r",
    "codemirrorMimeType": "text/x-rsrc",
    "languageId": 307
  },
  "RAML": {
    "type": "markup",
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "tmScope": "source.yaml",
    "color": "#77d9fb",
    "extensions": [
      ".raml"
    ],
    "languageId": 308
  },
  "RDoc": {
    "type": "prose",
    "color": "#701516",
    "aceMode": "rdoc",
    "wrap": true,
    "extensions": [
      ".rdoc"
    ],
    "tmScope": "text.rdoc",
    "languageId": 309
  },
  "REALbasic": {
    "type": "programming",
    "extensions": [
      ".rbbas",
      ".rbfrm",
      ".rbmnu",
      ".rbres",
      ".rbtbar",
      ".rbuistate"
    ],
    "tmScope": "source.vbnet",
    "aceMode": "text",
    "languageId": 310
  },
  "REXX": {
    "type": "programming",
    "color": "#d90e09",
    "aliases": [
      "arexx"
    ],
    "extensions": [
      ".rexx",
      ".pprx",
      ".rex"
    ],
    "interpreters": [
      "regina",
      "rexx"
    ],
    "tmScope": "source.rexx",
    "aceMode": "text",
    "languageId": 311
  },
  "RMarkdown": {
    "type": "prose",
    "color": "#198ce7",
    "wrap": true,
    "aceMode": "markdown",
    "codemirrorMode": "gfm",
    "codemirrorMimeType": "text/x-gfm",
    "extensions": [
      ".rmd"
    ],
    "tmScope": "source.gfm",
    "languageId": 313
  },
  "RPC": {
    "type": "programming",
    "aliases": [
      "rpcgen",
      "oncrpc",
      "xdr"
    ],
    "aceMode": "c_cpp",
    "extensions": [
      ".x"
    ],
    "tmScope": "source.c",
    "languageId": 1031374237
  },
  "RPM Spec": {
    "type": "data",
    "tmScope": "source.rpm-spec",
    "extensions": [
      ".spec"
    ],
    "aliases": [
      "specfile"
    ],
    "aceMode": "text",
    "codemirrorMode": "rpm",
    "codemirrorMimeType": "text/x-rpm-spec",
    "languageId": 314
  },
  "RUNOFF": {
    "type": "markup",
    "color": "#665a4e",
    "extensions": [
      ".rnh",
      ".rno"
    ],
    "wrap": true,
    "tmScope": "text.runoff",
    "aceMode": "text",
    "languageId": 315
  },
  "Racket": {
    "type": "programming",
    "color": "#3c5caa",
    "extensions": [
      ".rkt",
      ".rktd",
      ".rktl",
      ".scrbl"
    ],
    "interpreters": [
      "racket"
    ],
    "tmScope": "source.racket",
    "aceMode": "lisp",
    "languageId": 316
  },
  "Ragel": {
    "type": "programming",
    "color": "#9d5200",
    "extensions": [
      ".rl"
    ],
    "aliases": [
      "ragel-rb",
      "ragel-ruby"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 317
  },
  "Raku": {
    "type": "programming",
    "color": "#0000fb",
    "extensions": [
      ".6pl",
      ".6pm",
      ".nqp",
      ".p6",
      ".p6l",
      ".p6m",
      ".pl",
      ".pl6",
      ".pm",
      ".pm6",
      ".raku",
      ".rakumod",
      ".t"
    ],
    "interpreters": [
      "perl6",
      "raku",
      "rakudo"
    ],
    "aliases": [
      "perl6",
      "perl-6"
    ],
    "tmScope": "source.raku",
    "aceMode": "perl",
    "codemirrorMode": "perl",
    "codemirrorMimeType": "text/x-perl",
    "languageId": 283
  },
  "Rascal": {
    "type": "programming",
    "color": "#fffaa0",
    "extensions": [
      ".rsc"
    ],
    "tmScope": "source.rascal",
    "aceMode": "text",
    "languageId": 173616037
  },
  "Raw token data": {
    "type": "data",
    "aliases": [
      "raw"
    ],
    "extensions": [
      ".raw"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 318
  },
  "ReScript": {
    "type": "programming",
    "color": "#ed5051",
    "aceMode": "rust",
    "codemirrorMode": "rust",
    "codemirrorMimeType": "text/x-rustsrc",
    "extensions": [
      ".res"
    ],
    "interpreters": [
      "ocaml"
    ],
    "tmScope": "source.rescript",
    "languageId": 501875647
  },
  "Readline Config": {
    "type": "data",
    "group": "INI",
    "aliases": [
      "inputrc",
      "readline"
    ],
    "filenames": [
      ".inputrc",
      "inputrc"
    ],
    "tmScope": "source.inputrc",
    "aceMode": "text",
    "languageId": 538732839
  },
  "Reason": {
    "type": "programming",
    "color": "#ff5847",
    "aceMode": "rust",
    "codemirrorMode": "rust",
    "codemirrorMimeType": "text/x-rustsrc",
    "extensions": [
      ".re",
      ".rei"
    ],
    "tmScope": "source.reason",
    "languageId": 869538413
  },
  "Rebol": {
    "type": "programming",
    "color": "#358a5b",
    "extensions": [
      ".reb",
      ".r",
      ".r2",
      ".r3",
      ".rebol"
    ],
    "aceMode": "text",
    "tmScope": "source.rebol",
    "languageId": 319
  },
  "Record Jar": {
    "type": "data",
    "filenames": [
      "language-subtag-registry.txt"
    ],
    "tmScope": "source.record-jar",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "aceMode": "text",
    "color": "#0673ba",
    "languageId": 865765202
  },
  "Red": {
    "type": "programming",
    "color": "#f50000",
    "extensions": [
      ".red",
      ".reds"
    ],
    "aliases": [
      "red/system"
    ],
    "tmScope": "source.red",
    "aceMode": "text",
    "languageId": 320
  },
  "Redcode": {
    "type": "programming",
    "extensions": [
      ".cw"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 321
  },
  "Redirect Rules": {
    "type": "data",
    "aliases": [
      "redirects"
    ],
    "filenames": [
      "_redirects"
    ],
    "tmScope": "source.redirects",
    "aceMode": "text",
    "languageId": 1020148948
  },
  "Regular Expression": {
    "type": "data",
    "color": "#009a00",
    "extensions": [
      ".regexp",
      ".regex"
    ],
    "aliases": [
      "regexp",
      "regex"
    ],
    "aceMode": "text",
    "tmScope": "source.regexp",
    "languageId": 363378884
  },
  "Ren'Py": {
    "type": "programming",
    "aliases": [
      "renpy"
    ],
    "color": "#ff7f7f",
    "extensions": [
      ".rpy"
    ],
    "tmScope": "source.renpy",
    "aceMode": "python",
    "languageId": 322
  },
  "RenderScript": {
    "type": "programming",
    "extensions": [
      ".rs",
      ".rsh"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 323
  },
  "Rich Text Format": {
    "type": "markup",
    "extensions": [
      ".rtf"
    ],
    "tmScope": "text.rtf",
    "aceMode": "text",
    "languageId": 51601661
  },
  "Ring": {
    "type": "programming",
    "color": "#2D54CB",
    "extensions": [
      ".ring"
    ],
    "tmScope": "source.ring",
    "aceMode": "text",
    "languageId": 431
  },
  "Riot": {
    "type": "markup",
    "color": "#A71E49",
    "aceMode": "html",
    "extensions": [
      ".riot"
    ],
    "tmScope": "text.html.riot",
    "languageId": 878396783
  },
  "RobotFramework": {
    "type": "programming",
    "color": "#00c0b5",
    "extensions": [
      ".robot"
    ],
    "tmScope": "text.robot",
    "aceMode": "text",
    "languageId": 324
  },
  "Roff": {
    "type": "markup",
    "color": "#ecdebe",
    "extensions": [
      ".roff",
      ".1",
      ".1in",
      ".1m",
      ".1x",
      ".2",
      ".3",
      ".3in",
      ".3m",
      ".3p",
      ".3pm",
      ".3qt",
      ".3x",
      ".4",
      ".5",
      ".6",
      ".7",
      ".8",
      ".9",
      ".l",
      ".man",
      ".mdoc",
      ".me",
      ".ms",
      ".n",
      ".nr",
      ".rno",
      ".tmac"
    ],
    "filenames": [
      "eqnrc",
      "mmn",
      "mmt",
      "troffrc",
      "troffrc-end"
    ],
    "tmScope": "text.roff",
    "aliases": [
      "groff",
      "man",
      "manpage",
      "man page",
      "man-page",
      "mdoc",
      "nroff",
      "troff"
    ],
    "wrap": true,
    "aceMode": "text",
    "codemirrorMode": "troff",
    "codemirrorMimeType": "text/troff",
    "languageId": 141
  },
  "Roff Manpage": {
    "type": "markup",
    "color": "#ecdebe",
    "group": "Roff",
    "extensions": [
      ".1",
      ".1in",
      ".1m",
      ".1x",
      ".2",
      ".3",
      ".3in",
      ".3m",
      ".3p",
      ".3pm",
      ".3qt",
      ".3x",
      ".4",
      ".5",
      ".6",
      ".7",
      ".8",
      ".9",
      ".man",
      ".mdoc"
    ],
    "wrap": true,
    "tmScope": "text.roff",
    "aceMode": "text",
    "codemirrorMode": "troff",
    "codemirrorMimeType": "text/troff",
    "languageId": 612669833
  },
  "Rouge": {
    "type": "programming",
    "aceMode": "clojure",
    "codemirrorMode": "clojure",
    "codemirrorMimeType": "text/x-clojure",
    "color": "#cc0088",
    "extensions": [
      ".rg"
    ],
    "tmScope": "source.clojure",
    "languageId": 325
  },
  "Ruby": {
    "type": "programming",
    "tmScope": "source.ruby",
    "aceMode": "ruby",
    "codemirrorMode": "ruby",
    "codemirrorMimeType": "text/x-ruby",
    "color": "#701516",
    "aliases": [
      "jruby",
      "macruby",
      "rake",
      "rb",
      "rbx"
    ],
    "extensions": [
      ".rb",
      ".builder",
      ".eye",
      ".fcgi",
      ".gemspec",
      ".god",
      ".jbuilder",
      ".mspec",
      ".pluginspec",
      ".podspec",
      ".prawn",
      ".rabl",
      ".rake",
      ".rbi",
      ".rbuild",
      ".rbw",
      ".rbx",
      ".ru",
      ".ruby",
      ".spec",
      ".thor",
      ".watchr"
    ],
    "interpreters": [
      "ruby",
      "macruby",
      "rake",
      "jruby",
      "rbx"
    ],
    "filenames": [
      ".irbrc",
      ".pryrc",
      ".simplecov",
      "Appraisals",
      "Berksfile",
      "Brewfile",
      "Buildfile",
      "Capfile",
      "Dangerfile",
      "Deliverfile",
      "Fastfile",
      "Gemfile",
      "Guardfile",
      "Jarfile",
      "Mavenfile",
      "Podfile",
      "Puppetfile",
      "Rakefile",
      "Snapfile",
      "Thorfile",
      "Vagrantfile",
      "buildfile"
    ],
    "languageId": 326
  },
  "Rust": {
    "type": "programming",
    "aliases": [
      "rs"
    ],
    "color": "#dea584",
    "extensions": [
      ".rs",
      ".rs.in"
    ],
    "tmScope": "source.rust",
    "aceMode": "rust",
    "codemirrorMode": "rust",
    "codemirrorMimeType": "text/x-rustsrc",
    "languageId": 327
  },
  "SAS": {
    "type": "programming",
    "color": "#B34936",
    "extensions": [
      ".sas"
    ],
    "tmScope": "source.sas",
    "aceMode": "text",
    "codemirrorMode": "sas",
    "codemirrorMimeType": "text/x-sas",
    "languageId": 328
  },
  "SCSS": {
    "type": "markup",
    "color": "#c6538c",
    "tmScope": "source.css.scss",
    "aceMode": "scss",
    "codemirrorMode": "css",
    "codemirrorMimeType": "text/x-scss",
    "extensions": [
      ".scss"
    ],
    "languageId": 329
  },
  "SELinux Policy": {
    "aliases": [
      "SELinux Kernel Policy Language",
      "sepolicy"
    ],
    "type": "data",
    "tmScope": "source.sepolicy",
    "extensions": [
      ".te"
    ],
    "filenames": [
      "file_contexts",
      "genfs_contexts",
      "initial_sids",
      "port_contexts",
      "security_classes"
    ],
    "aceMode": "text",
    "languageId": 880010326
  },
  "SMT": {
    "type": "programming",
    "extensions": [
      ".smt2",
      ".smt"
    ],
    "interpreters": [
      "boolector",
      "cvc4",
      "mathsat5",
      "opensmt",
      "smtinterpol",
      "smt-rat",
      "stp",
      "verit",
      "yices2",
      "z3"
    ],
    "tmScope": "source.smt",
    "aceMode": "text",
    "languageId": 330
  },
  "SPARQL": {
    "type": "data",
    "color": "#0C4597",
    "tmScope": "source.sparql",
    "aceMode": "text",
    "codemirrorMode": "sparql",
    "codemirrorMimeType": "application/sparql-query",
    "extensions": [
      ".sparql",
      ".rq"
    ],
    "languageId": 331
  },
  "SQF": {
    "type": "programming",
    "color": "#3F3F3F",
    "extensions": [
      ".sqf",
      ".hqf"
    ],
    "tmScope": "source.sqf",
    "aceMode": "text",
    "languageId": 332
  },
  "SQL": {
    "type": "data",
    "color": "#e38c00",
    "tmScope": "source.sql",
    "aceMode": "sql",
    "codemirrorMode": "sql",
    "codemirrorMimeType": "text/x-sql",
    "extensions": [
      ".sql",
      ".cql",
      ".ddl",
      ".inc",
      ".mysql",
      ".prc",
      ".tab",
      ".udf",
      ".viw"
    ],
    "languageId": 333
  },
  "SQLPL": {
    "type": "programming",
    "color": "#e38c00",
    "aceMode": "sql",
    "codemirrorMode": "sql",
    "codemirrorMimeType": "text/x-sql",
    "tmScope": "source.sql",
    "extensions": [
      ".sql",
      ".db2"
    ],
    "languageId": 334
  },
  "SRecode Template": {
    "type": "markup",
    "color": "#348a34",
    "tmScope": "source.lisp",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "extensions": [
      ".srt"
    ],
    "languageId": 335
  },
  "SSH Config": {
    "type": "data",
    "group": "INI",
    "filenames": [
      "ssh-config",
      "ssh_config",
      "sshconfig",
      "sshconfig.snip",
      "sshd-config",
      "sshd_config"
    ],
    "aceMode": "text",
    "tmScope": "source.ssh-config",
    "languageId": 554920715
  },
  "STON": {
    "type": "data",
    "group": "Smalltalk",
    "extensions": [
      ".ston"
    ],
    "tmScope": "source.smalltalk",
    "aceMode": "text",
    "languageId": 336
  },
  "SVG": {
    "type": "data",
    "color": "#ff9900",
    "extensions": [
      ".svg"
    ],
    "tmScope": "text.xml.svg",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 337
  },
  "SWIG": {
    "type": "programming",
    "extensions": [
      ".i"
    ],
    "tmScope": "source.c++",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 1066250075
  },
  "Sage": {
    "type": "programming",
    "extensions": [
      ".sage",
      ".sagews"
    ],
    "tmScope": "source.python",
    "aceMode": "python",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "languageId": 338
  },
  "SaltStack": {
    "type": "programming",
    "color": "#646464",
    "aliases": [
      "saltstate",
      "salt"
    ],
    "extensions": [
      ".sls"
    ],
    "tmScope": "source.yaml.salt",
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "languageId": 339
  },
  "Sass": {
    "type": "markup",
    "color": "#a53b70",
    "tmScope": "source.sass",
    "extensions": [
      ".sass"
    ],
    "aceMode": "sass",
    "codemirrorMode": "sass",
    "codemirrorMimeType": "text/x-sass",
    "languageId": 340
  },
  "Scala": {
    "type": "programming",
    "tmScope": "source.scala",
    "aceMode": "scala",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-scala",
    "color": "#c22d40",
    "extensions": [
      ".scala",
      ".kojo",
      ".sbt",
      ".sc"
    ],
    "interpreters": [
      "scala"
    ],
    "languageId": 341
  },
  "Scaml": {
    "type": "markup",
    "color": "#bd181a",
    "extensions": [
      ".scaml"
    ],
    "tmScope": "source.scaml",
    "aceMode": "text",
    "languageId": 342
  },
  "Scheme": {
    "type": "programming",
    "color": "#1e4aec",
    "extensions": [
      ".scm",
      ".sch",
      ".sld",
      ".sls",
      ".sps",
      ".ss"
    ],
    "interpreters": [
      "scheme",
      "guile",
      "bigloo",
      "chicken",
      "csi",
      "gosh",
      "r6rs"
    ],
    "tmScope": "source.scheme",
    "aceMode": "scheme",
    "codemirrorMode": "scheme",
    "codemirrorMimeType": "text/x-scheme",
    "languageId": 343
  },
  "Scilab": {
    "type": "programming",
    "color": "#ca0f21",
    "extensions": [
      ".sci",
      ".sce",
      ".tst"
    ],
    "tmScope": "source.scilab",
    "aceMode": "text",
    "languageId": 344
  },
  "Self": {
    "type": "programming",
    "color": "#0579aa",
    "extensions": [
      ".self"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 345
  },
  "ShaderLab": {
    "type": "programming",
    "color": "#222c37",
    "extensions": [
      ".shader"
    ],
    "aceMode": "text",
    "tmScope": "source.shaderlab",
    "languageId": 664257356
  },
  "Shell": {
    "type": "programming",
    "color": "#89e051",
    "aliases": [
      "sh",
      "shell-script",
      "bash",
      "zsh"
    ],
    "extensions": [
      ".sh",
      ".bash",
      ".bats",
      ".cgi",
      ".command",
      ".env",
      ".fcgi",
      ".ksh",
      ".sh.in",
      ".tmux",
      ".tool",
      ".zsh"
    ],
    "filenames": [
      ".bash_aliases",
      ".bash_history",
      ".bash_logout",
      ".bash_profile",
      ".bashrc",
      ".cshrc",
      ".env",
      ".env.example",
      ".flaskenv",
      ".login",
      ".profile",
      ".zlogin",
      ".zlogout",
      ".zprofile",
      ".zshenv",
      ".zshrc",
      "9fs",
      "PKGBUILD",
      "bash_aliases",
      "bash_logout",
      "bash_profile",
      "bashrc",
      "cshrc",
      "gradlew",
      "login",
      "man",
      "profile",
      "zlogin",
      "zlogout",
      "zprofile",
      "zshenv",
      "zshrc"
    ],
    "interpreters": [
      "ash",
      "bash",
      "dash",
      "ksh",
      "mksh",
      "pdksh",
      "rc",
      "sh",
      "zsh"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 346
  },
  "ShellSession": {
    "type": "programming",
    "extensions": [
      ".sh-session"
    ],
    "aliases": [
      "bash session",
      "console"
    ],
    "tmScope": "text.shell-session",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 347
  },
  "Shen": {
    "type": "programming",
    "color": "#120F14",
    "extensions": [
      ".shen"
    ],
    "tmScope": "source.shen",
    "aceMode": "text",
    "languageId": 348
  },
  "Sieve": {
    "type": "programming",
    "tmScope": "source.sieve",
    "aceMode": "text",
    "extensions": [
      ".sieve"
    ],
    "codemirrorMode": "sieve",
    "codemirrorMimeType": "application/sieve",
    "languageId": 208976687
  },
  "Singularity": {
    "type": "programming",
    "color": "#64E6AD",
    "tmScope": "source.singularity",
    "filenames": [
      "Singularity"
    ],
    "aceMode": "text",
    "languageId": 987024632
  },
  "Slash": {
    "type": "programming",
    "color": "#007eff",
    "extensions": [
      ".sl"
    ],
    "tmScope": "text.html.slash",
    "aceMode": "text",
    "languageId": 349
  },
  "Slice": {
    "type": "programming",
    "color": "#003fa2",
    "tmScope": "source.slice",
    "aceMode": "text",
    "extensions": [
      ".ice"
    ],
    "languageId": 894641667
  },
  "Slim": {
    "type": "markup",
    "color": "#2b2b2b",
    "extensions": [
      ".slim"
    ],
    "tmScope": "text.slim",
    "aceMode": "text",
    "codemirrorMode": "slim",
    "codemirrorMimeType": "text/x-slim",
    "languageId": 350
  },
  "SmPL": {
    "type": "programming",
    "extensions": [
      ".cocci"
    ],
    "aliases": [
      "coccinelle"
    ],
    "aceMode": "text",
    "tmScope": "source.smpl",
    "color": "#c94949",
    "languageId": 164123055
  },
  "Smali": {
    "type": "programming",
    "extensions": [
      ".smali"
    ],
    "aceMode": "text",
    "tmScope": "source.smali",
    "languageId": 351
  },
  "Smalltalk": {
    "type": "programming",
    "color": "#596706",
    "extensions": [
      ".st",
      ".cs"
    ],
    "aliases": [
      "squeak"
    ],
    "tmScope": "source.smalltalk",
    "aceMode": "text",
    "codemirrorMode": "smalltalk",
    "codemirrorMimeType": "text/x-stsrc",
    "languageId": 352
  },
  "Smarty": {
    "type": "programming",
    "color": "#f0c040",
    "extensions": [
      ".tpl"
    ],
    "aceMode": "smarty",
    "codemirrorMode": "smarty",
    "codemirrorMimeType": "text/x-smarty",
    "tmScope": "text.html.smarty",
    "languageId": 353
  },
  "Solidity": {
    "type": "programming",
    "color": "#AA6746",
    "aceMode": "text",
    "tmScope": "source.solidity",
    "extensions": [
      ".sol"
    ],
    "languageId": 237469032
  },
  "Soong": {
    "type": "data",
    "tmScope": "source.bp",
    "aceMode": "text",
    "filenames": [
      "Android.bp"
    ],
    "languageId": 222900098
  },
  "SourcePawn": {
    "type": "programming",
    "color": "#f69e1d",
    "aliases": [
      "sourcemod"
    ],
    "extensions": [
      ".sp",
      ".inc"
    ],
    "tmScope": "source.sourcepawn",
    "aceMode": "text",
    "languageId": 354
  },
  "Spline Font Database": {
    "type": "data",
    "extensions": [
      ".sfd"
    ],
    "tmScope": "text.sfd",
    "aceMode": "yaml",
    "languageId": 767169629
  },
  "Squirrel": {
    "type": "programming",
    "color": "#800000",
    "extensions": [
      ".nut"
    ],
    "tmScope": "source.nut",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-c++src",
    "languageId": 355
  },
  "Stan": {
    "type": "programming",
    "color": "#b2011d",
    "extensions": [
      ".stan"
    ],
    "aceMode": "text",
    "tmScope": "source.stan",
    "languageId": 356
  },
  "Standard ML": {
    "type": "programming",
    "color": "#dc566d",
    "aliases": [
      "sml"
    ],
    "extensions": [
      ".ml",
      ".fun",
      ".sig",
      ".sml"
    ],
    "tmScope": "source.ml",
    "aceMode": "text",
    "codemirrorMode": "mllike",
    "codemirrorMimeType": "text/x-ocaml",
    "languageId": 357
  },
  "Starlark": {
    "type": "programming",
    "tmScope": "source.python",
    "aceMode": "python",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "color": "#76d275",
    "extensions": [
      ".bzl"
    ],
    "filenames": [
      "BUCK",
      "BUILD",
      "BUILD.bazel",
      "Tiltfile",
      "WORKSPACE"
    ],
    "aliases": [
      "bazel",
      "bzl"
    ],
    "languageId": 960266174
  },
  "Stata": {
    "type": "programming",
    "color": "#1a5f91",
    "extensions": [
      ".do",
      ".ado",
      ".doh",
      ".ihlp",
      ".mata",
      ".matah",
      ".sthlp"
    ],
    "tmScope": "source.stata",
    "aceMode": "text",
    "languageId": 358
  },
  "StringTemplate": {
    "type": "markup",
    "color": "#3fb34f",
    "extensions": [
      ".st"
    ],
    "tmScope": "source.string-template",
    "aceMode": "html",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "languageId": 89855901
  },
  "Stylus": {
    "type": "markup",
    "color": "#ff6347",
    "extensions": [
      ".styl"
    ],
    "tmScope": "source.stylus",
    "aceMode": "stylus",
    "languageId": 359
  },
  "SubRip Text": {
    "type": "data",
    "color": "#9e0101",
    "extensions": [
      ".srt"
    ],
    "aceMode": "text",
    "tmScope": "text.srt",
    "languageId": 360
  },
  "SugarSS": {
    "type": "markup",
    "color": "#2fcc9f",
    "tmScope": "source.css.postcss.sugarss",
    "group": "CSS",
    "extensions": [
      ".sss"
    ],
    "aceMode": "text",
    "languageId": 826404698
  },
  "SuperCollider": {
    "type": "programming",
    "color": "#46390b",
    "extensions": [
      ".sc",
      ".scd"
    ],
    "interpreters": [
      "sclang",
      "scsynth"
    ],
    "tmScope": "source.supercollider",
    "aceMode": "text",
    "languageId": 361
  },
  "Svelte": {
    "type": "markup",
    "color": "#ff3e00",
    "tmScope": "source.svelte",
    "aceMode": "html",
    "codemirrorMode": "htmlmixed",
    "codemirrorMimeType": "text/html",
    "extensions": [
      ".svelte"
    ],
    "languageId": 928734530
  },
  "Swift": {
    "type": "programming",
    "color": "#F05138",
    "extensions": [
      ".swift"
    ],
    "tmScope": "source.swift",
    "aceMode": "text",
    "codemirrorMode": "swift",
    "codemirrorMimeType": "text/x-swift",
    "languageId": 362
  },
  "SystemVerilog": {
    "type": "programming",
    "color": "#DAE1C2",
    "extensions": [
      ".sv",
      ".svh",
      ".vh"
    ],
    "tmScope": "source.systemverilog",
    "aceMode": "verilog",
    "codemirrorMode": "verilog",
    "codemirrorMimeType": "text/x-systemverilog",
    "languageId": 363
  },
  "TI Program": {
    "type": "programming",
    "aceMode": "text",
    "color": "#A0AA87",
    "extensions": [
      ".8xp",
      ".8xk",
      ".8xk.txt",
      ".8xp.txt"
    ],
    "languageId": 422,
    "tmScope": "none"
  },
  "TLA": {
    "type": "programming",
    "color": "#4b0079",
    "extensions": [
      ".tla"
    ],
    "tmScope": "source.tla",
    "aceMode": "text",
    "languageId": 364
  },
  "TOML": {
    "type": "data",
    "color": "#9c4221",
    "extensions": [
      ".toml"
    ],
    "filenames": [
      "Cargo.lock",
      "Gopkg.lock",
      "Pipfile",
      "poetry.lock"
    ],
    "tmScope": "source.toml",
    "aceMode": "toml",
    "codemirrorMode": "toml",
    "codemirrorMimeType": "text/x-toml",
    "languageId": 365
  },
  "TSQL": {
    "type": "programming",
    "color": "#e38c00",
    "extensions": [
      ".sql"
    ],
    "aceMode": "sql",
    "tmScope": "source.tsql",
    "languageId": 918334941
  },
  "TSV": {
    "type": "data",
    "color": "#237346",
    "aceMode": "text",
    "tmScope": "source.generic-db",
    "extensions": [
      ".tsv"
    ],
    "languageId": 1035892117
  },
  "TSX": {
    "type": "programming",
    "color": "#2b7489",
    "group": "TypeScript",
    "extensions": [
      ".tsx"
    ],
    "tmScope": "source.tsx",
    "aceMode": "javascript",
    "codemirrorMode": "jsx",
    "codemirrorMimeType": "text/jsx",
    "languageId": 94901924
  },
  "TXL": {
    "type": "programming",
    "color": "#0178b8",
    "extensions": [
      ".txl"
    ],
    "tmScope": "source.txl",
    "aceMode": "text",
    "languageId": 366
  },
  "Tcl": {
    "type": "programming",
    "color": "#e4cc98",
    "extensions": [
      ".tcl",
      ".adp",
      ".tcl.in",
      ".tm"
    ],
    "filenames": [
      "owh",
      "starfield"
    ],
    "interpreters": [
      "tclsh",
      "wish"
    ],
    "tmScope": "source.tcl",
    "aceMode": "tcl",
    "codemirrorMode": "tcl",
    "codemirrorMimeType": "text/x-tcl",
    "languageId": 367
  },
  "Tcsh": {
    "type": "programming",
    "group": "Shell",
    "extensions": [
      ".tcsh",
      ".csh"
    ],
    "interpreters": [
      "tcsh",
      "csh"
    ],
    "tmScope": "source.shell",
    "aceMode": "sh",
    "codemirrorMode": "shell",
    "codemirrorMimeType": "text/x-sh",
    "languageId": 368
  },
  "TeX": {
    "type": "markup",
    "color": "#3D6117",
    "aceMode": "tex",
    "codemirrorMode": "stex",
    "codemirrorMimeType": "text/x-stex",
    "tmScope": "text.tex.latex",
    "wrap": true,
    "aliases": [
      "latex"
    ],
    "extensions": [
      ".tex",
      ".aux",
      ".bbx",
      ".cbx",
      ".cls",
      ".dtx",
      ".ins",
      ".lbx",
      ".ltx",
      ".mkii",
      ".mkiv",
      ".mkvi",
      ".sty",
      ".toc"
    ],
    "languageId": 369
  },
  "Tea": {
    "type": "markup",
    "extensions": [
      ".tea"
    ],
    "tmScope": "source.tea",
    "aceMode": "text",
    "languageId": 370
  },
  "Terra": {
    "type": "programming",
    "extensions": [
      ".t"
    ],
    "color": "#00004c",
    "tmScope": "source.terra",
    "aceMode": "lua",
    "codemirrorMode": "lua",
    "codemirrorMimeType": "text/x-lua",
    "interpreters": [
      "lua"
    ],
    "languageId": 371
  },
  "Texinfo": {
    "type": "prose",
    "wrap": true,
    "extensions": [
      ".texinfo",
      ".texi",
      ".txi"
    ],
    "aceMode": "text",
    "tmScope": "text.texinfo",
    "interpreters": [
      "makeinfo"
    ],
    "languageId": 988020015
  },
  "Text": {
    "type": "prose",
    "wrap": true,
    "aliases": [
      "fundamental",
      "plain text"
    ],
    "extensions": [
      ".txt",
      ".fr",
      ".nb",
      ".ncl",
      ".no"
    ],
    "filenames": [
      "COPYING",
      "COPYING.regex",
      "COPYRIGHT.regex",
      "FONTLOG",
      "INSTALL",
      "INSTALL.mysql",
      "LICENSE",
      "LICENSE.mysql",
      "NEWS",
      "README.me",
      "README.mysql",
      "README.nss",
      "click.me",
      "delete.me",
      "keep.me",
      "package.mask",
      "package.use.mask",
      "package.use.stable.mask",
      "read.me",
      "readme.1st",
      "test.me",
      "use.mask",
      "use.stable.mask"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 372
  },
  "TextMate Properties": {
    "type": "data",
    "color": "#df66e4",
    "aliases": [
      "tm-properties"
    ],
    "filenames": [
      ".tm_properties"
    ],
    "aceMode": "properties",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "tmScope": "source.tm-properties",
    "languageId": 981795023
  },
  "Textile": {
    "type": "prose",
    "color": "#ffe7ac",
    "aceMode": "textile",
    "codemirrorMode": "textile",
    "codemirrorMimeType": "text/x-textile",
    "wrap": true,
    "extensions": [
      ".textile"
    ],
    "tmScope": "none",
    "languageId": 373
  },
  "Thrift": {
    "type": "programming",
    "color": "#D12127",
    "tmScope": "source.thrift",
    "extensions": [
      ".thrift"
    ],
    "aceMode": "text",
    "languageId": 374
  },
  "Turing": {
    "type": "programming",
    "color": "#cf142b",
    "extensions": [
      ".t",
      ".tu"
    ],
    "tmScope": "source.turing",
    "aceMode": "text",
    "languageId": 375
  },
  "Turtle": {
    "type": "data",
    "extensions": [
      ".ttl"
    ],
    "tmScope": "source.turtle",
    "aceMode": "text",
    "codemirrorMode": "turtle",
    "codemirrorMimeType": "text/turtle",
    "languageId": 376
  },
  "Twig": {
    "type": "markup",
    "color": "#c1d026",
    "extensions": [
      ".twig"
    ],
    "tmScope": "text.html.twig",
    "aceMode": "twig",
    "codemirrorMode": "twig",
    "codemirrorMimeType": "text/x-twig",
    "languageId": 377
  },
  "Type Language": {
    "type": "data",
    "aliases": [
      "tl"
    ],
    "extensions": [
      ".tl"
    ],
    "tmScope": "source.tl",
    "aceMode": "text",
    "languageId": 632765617
  },
  "TypeScript": {
    "type": "programming",
    "color": "#2b7489",
    "aliases": [
      "ts"
    ],
    "interpreters": [
      "deno",
      "ts-node"
    ],
    "extensions": [
      ".ts"
    ],
    "tmScope": "source.ts",
    "aceMode": "typescript",
    "codemirrorMode": "javascript",
    "codemirrorMimeType": "application/typescript",
    "languageId": 378
  },
  "Unified Parallel C": {
    "type": "programming",
    "color": "#4e3617",
    "group": "C",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "extensions": [
      ".upc"
    ],
    "tmScope": "source.c",
    "languageId": 379
  },
  "Unity3D Asset": {
    "type": "data",
    "color": "#222c37",
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "extensions": [
      ".anim",
      ".asset",
      ".mask",
      ".mat",
      ".meta",
      ".prefab",
      ".unity"
    ],
    "tmScope": "source.yaml",
    "languageId": 380
  },
  "Unix Assembly": {
    "type": "programming",
    "group": "Assembly",
    "extensions": [
      ".s",
      ".ms"
    ],
    "tmScope": "source.x86",
    "aceMode": "assembly_x86",
    "languageId": 120
  },
  "Uno": {
    "type": "programming",
    "color": "#9933cc",
    "extensions": [
      ".uno"
    ],
    "aceMode": "csharp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csharp",
    "tmScope": "source.cs",
    "languageId": 381
  },
  "UnrealScript": {
    "type": "programming",
    "color": "#a54c4d",
    "extensions": [
      ".uc"
    ],
    "tmScope": "source.java",
    "aceMode": "java",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-java",
    "languageId": 382
  },
  "UrWeb": {
    "type": "programming",
    "color": "#ccccee",
    "aliases": [
      "Ur/Web",
      "Ur"
    ],
    "extensions": [
      ".ur",
      ".urs"
    ],
    "tmScope": "source.ur",
    "aceMode": "text",
    "languageId": 383
  },
  "V": {
    "type": "programming",
    "color": "#4f87c4",
    "aliases": [
      "vlang"
    ],
    "extensions": [
      ".v"
    ],
    "tmScope": "source.v",
    "aceMode": "golang",
    "codemirrorMode": "go",
    "codemirrorMimeType": "text/x-go",
    "languageId": 603371597
  },
  "VBA": {
    "type": "programming",
    "color": "#867db1",
    "extensions": [
      ".bas",
      ".cls",
      ".frm",
      ".frx",
      ".vba"
    ],
    "tmScope": "source.vbnet",
    "aliases": [
      "vb6",
      "visual basic 6",
      "visual basic for applications"
    ],
    "aceMode": "text",
    "codemirrorMode": "vb",
    "codemirrorMimeType": "text/x-vb",
    "languageId": 399230729
  },
  "VBScript": {
    "type": "programming",
    "color": "#15dcdc",
    "extensions": [
      ".vbs"
    ],
    "tmScope": "source.vbnet",
    "aceMode": "text",
    "codemirrorMode": "vbscript",
    "codemirrorMimeType": "text/vbscript",
    "languageId": 408016005
  },
  "VCL": {
    "type": "programming",
    "color": "#148AA8",
    "extensions": [
      ".vcl"
    ],
    "tmScope": "source.varnish.vcl",
    "aceMode": "text",
    "languageId": 384
  },
  "VHDL": {
    "type": "programming",
    "color": "#adb2cb",
    "extensions": [
      ".vhdl",
      ".vhd",
      ".vhf",
      ".vhi",
      ".vho",
      ".vhs",
      ".vht",
      ".vhw"
    ],
    "tmScope": "source.vhdl",
    "aceMode": "vhdl",
    "codemirrorMode": "vhdl",
    "codemirrorMimeType": "text/x-vhdl",
    "languageId": 385
  },
  "Vala": {
    "type": "programming",
    "color": "#fbe5cd",
    "extensions": [
      ".vala",
      ".vapi"
    ],
    "tmScope": "source.vala",
    "aceMode": "vala",
    "languageId": 386
  },
  "Valve Data Format": {
    "type": "data",
    "color": "#f26025",
    "aliases": [
      "keyvalues",
      "vdf"
    ],
    "extensions": [
      ".vdf"
    ],
    "aceMode": "text",
    "tmScope": "source.keyvalues",
    "languageId": 544060961
  },
  "Verilog": {
    "type": "programming",
    "color": "#b2b7f8",
    "extensions": [
      ".v",
      ".veo"
    ],
    "tmScope": "source.verilog",
    "aceMode": "verilog",
    "codemirrorMode": "verilog",
    "codemirrorMimeType": "text/x-verilog",
    "languageId": 387
  },
  "Vim Help File": {
    "type": "prose",
    "color": "#199f4b",
    "aliases": [
      "help",
      "vimhelp"
    ],
    "extensions": [
      ".txt"
    ],
    "tmScope": "text.vim-help",
    "aceMode": "text",
    "languageId": 508563686
  },
  "Vim Script": {
    "type": "programming",
    "color": "#199f4b",
    "tmScope": "source.viml",
    "aliases": [
      "vim",
      "viml",
      "nvim"
    ],
    "extensions": [
      ".vim",
      ".vba",
      ".vmb"
    ],
    "filenames": [
      ".exrc",
      ".gvimrc",
      ".nvimrc",
      ".vimrc",
      "_vimrc",
      "gvimrc",
      "nvimrc",
      "vimrc"
    ],
    "aceMode": "text",
    "languageId": 388
  },
  "Vim Snippet": {
    "type": "markup",
    "color": "#199f4b",
    "aliases": [
      "SnipMate",
      "UltiSnip",
      "UltiSnips",
      "NeoSnippet"
    ],
    "extensions": [
      ".snip",
      ".snippet",
      ".snippets"
    ],
    "tmScope": "source.vim-snippet",
    "aceMode": "text",
    "languageId": 81265970
  },
  "Visual Basic .NET": {
    "type": "programming",
    "color": "#945db7",
    "extensions": [
      ".vb",
      ".vbhtml"
    ],
    "aliases": [
      "visual basic",
      "vbnet",
      "vb .net",
      "vb.net"
    ],
    "tmScope": "source.vbnet",
    "aceMode": "text",
    "codemirrorMode": "vb",
    "codemirrorMimeType": "text/x-vb",
    "languageId": 389
  },
  "Volt": {
    "type": "programming",
    "color": "#1F1F1F",
    "extensions": [
      ".volt"
    ],
    "tmScope": "source.d",
    "aceMode": "d",
    "codemirrorMode": "d",
    "codemirrorMimeType": "text/x-d",
    "languageId": 390
  },
  "Vue": {
    "type": "markup",
    "color": "#41b883",
    "extensions": [
      ".vue"
    ],
    "tmScope": "text.html.vue",
    "aceMode": "html",
    "languageId": 391
  },
  "Wavefront Material": {
    "type": "data",
    "extensions": [
      ".mtl"
    ],
    "tmScope": "source.wavefront.mtl",
    "aceMode": "text",
    "languageId": 392
  },
  "Wavefront Object": {
    "type": "data",
    "extensions": [
      ".obj"
    ],
    "tmScope": "source.wavefront.obj",
    "aceMode": "text",
    "languageId": 393
  },
  "Web Ontology Language": {
    "type": "data",
    "color": "#5b70bd",
    "extensions": [
      ".owl"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "languageId": 394
  },
  "WebAssembly": {
    "type": "programming",
    "color": "#04133b",
    "extensions": [
      ".wast",
      ".wat"
    ],
    "aliases": [
      "wast",
      "wasm"
    ],
    "tmScope": "source.webassembly",
    "aceMode": "lisp",
    "codemirrorMode": "commonlisp",
    "codemirrorMimeType": "text/x-common-lisp",
    "languageId": 956556503
  },
  "WebIDL": {
    "type": "programming",
    "extensions": [
      ".webidl"
    ],
    "tmScope": "source.webidl",
    "aceMode": "text",
    "codemirrorMode": "webidl",
    "codemirrorMimeType": "text/x-webidl",
    "languageId": 395
  },
  "WebVTT": {
    "type": "data",
    "wrap": true,
    "extensions": [
      ".vtt"
    ],
    "tmScope": "source.vtt",
    "aceMode": "text",
    "languageId": 658679714
  },
  "Wget Config": {
    "type": "data",
    "group": "INI",
    "aliases": [
      "wgetrc"
    ],
    "filenames": [
      ".wgetrc"
    ],
    "tmScope": "source.wgetrc",
    "aceMode": "text",
    "languageId": 668457123
  },
  "Wikitext": {
    "type": "prose",
    "color": "#fc5757",
    "wrap": true,
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "extensions": [
      ".mediawiki",
      ".wiki",
      ".wikitext"
    ],
    "tmScope": "text.html.mediawiki",
    "aceMode": "text",
    "languageId": 228
  },
  "Windows Registry Entries": {
    "type": "data",
    "color": "#52d5ff",
    "extensions": [
      ".reg"
    ],
    "tmScope": "source.reg",
    "aceMode": "ini",
    "codemirrorMode": "properties",
    "codemirrorMimeType": "text/x-properties",
    "languageId": 969674868
  },
  "Wollok": {
    "type": "programming",
    "color": "#a23738",
    "extensions": [
      ".wlk"
    ],
    "aceMode": "text",
    "tmScope": "source.wollok",
    "languageId": 632745969
  },
  "World of Warcraft Addon Data": {
    "type": "data",
    "color": "#f7e43f",
    "extensions": [
      ".toc"
    ],
    "tmScope": "source.toc",
    "aceMode": "text",
    "languageId": 396
  },
  "X BitMap": {
    "type": "data",
    "group": "C",
    "aliases": [
      "xbm"
    ],
    "extensions": [
      ".xbm"
    ],
    "aceMode": "c_cpp",
    "tmScope": "source.c",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 782911107
  },
  "X Font Directory Index": {
    "type": "data",
    "filenames": [
      "encodings.dir",
      "fonts.alias",
      "fonts.dir",
      "fonts.scale"
    ],
    "tmScope": "source.fontdir",
    "aceMode": "text",
    "languageId": 208700028
  },
  "X PixMap": {
    "type": "data",
    "group": "C",
    "aliases": [
      "xpm"
    ],
    "extensions": [
      ".xpm",
      ".pm"
    ],
    "aceMode": "c_cpp",
    "tmScope": "source.c",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 781846279
  },
  "X10": {
    "type": "programming",
    "aliases": [
      "xten"
    ],
    "aceMode": "text",
    "extensions": [
      ".x10"
    ],
    "color": "#4B6BEF",
    "tmScope": "source.x10",
    "languageId": 397
  },
  "XC": {
    "type": "programming",
    "color": "#99DA07",
    "extensions": [
      ".xc"
    ],
    "tmScope": "source.xc",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 398
  },
  "XCompose": {
    "type": "data",
    "filenames": [
      ".XCompose",
      "XCompose",
      "xcompose"
    ],
    "tmScope": "config.xcompose",
    "aceMode": "text",
    "languageId": 225167241
  },
  "XML": {
    "type": "data",
    "color": "#0060ac",
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "aliases": [
      "rss",
      "xsd",
      "wsdl"
    ],
    "extensions": [
      ".xml",
      ".adml",
      ".admx",
      ".ant",
      ".axml",
      ".builds",
      ".ccproj",
      ".ccxml",
      ".clixml",
      ".cproject",
      ".cscfg",
      ".csdef",
      ".csl",
      ".csproj",
      ".ct",
      ".depproj",
      ".dita",
      ".ditamap",
      ".ditaval",
      ".dll.config",
      ".dotsettings",
      ".filters",
      ".fsproj",
      ".fxml",
      ".glade",
      ".gml",
      ".gmx",
      ".grxml",
      ".gst",
      ".iml",
      ".ivy",
      ".jelly",
      ".jsproj",
      ".kml",
      ".launch",
      ".mdpolicy",
      ".mjml",
      ".mm",
      ".mod",
      ".mxml",
      ".natvis",
      ".ncl",
      ".ndproj",
      ".nproj",
      ".nuspec",
      ".odd",
      ".osm",
      ".pkgproj",
      ".pluginspec",
      ".proj",
      ".props",
      ".ps1xml",
      ".psc1",
      ".pt",
      ".rdf",
      ".res",
      ".resx",
      ".rs",
      ".rss",
      ".sch",
      ".scxml",
      ".sfproj",
      ".shproj",
      ".srdf",
      ".storyboard",
      ".sublime-snippet",
      ".targets",
      ".tml",
      ".ts",
      ".tsx",
      ".ui",
      ".urdf",
      ".ux",
      ".vbproj",
      ".vcxproj",
      ".vsixmanifest",
      ".vssettings",
      ".vstemplate",
      ".vxml",
      ".wixproj",
      ".workflow",
      ".wsdl",
      ".wsf",
      ".wxi",
      ".wxl",
      ".wxs",
      ".x3d",
      ".xacro",
      ".xaml",
      ".xib",
      ".xlf",
      ".xliff",
      ".xmi",
      ".xml.dist",
      ".xmp",
      ".xproj",
      ".xsd",
      ".xspec",
      ".xul",
      ".zcml"
    ],
    "filenames": [
      ".classpath",
      ".cproject",
      ".project",
      "App.config",
      "NuGet.config",
      "Settings.StyleCop",
      "Web.Debug.config",
      "Web.Release.config",
      "Web.config",
      "packages.config"
    ],
    "languageId": 399
  },
  "XML Property List": {
    "type": "data",
    "color": "#0060ac",
    "group": "XML",
    "extensions": [
      ".plist",
      ".stTheme",
      ".tmCommand",
      ".tmLanguage",
      ".tmPreferences",
      ".tmSnippet",
      ".tmTheme"
    ],
    "tmScope": "text.xml.plist",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 75622871
  },
  "XPages": {
    "type": "data",
    "extensions": [
      ".xsp-config",
      ".xsp.metadata"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 400
  },
  "XProc": {
    "type": "programming",
    "extensions": [
      ".xpl",
      ".xproc"
    ],
    "tmScope": "text.xml",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "languageId": 401
  },
  "XQuery": {
    "type": "programming",
    "color": "#5232e7",
    "extensions": [
      ".xquery",
      ".xq",
      ".xql",
      ".xqm",
      ".xqy"
    ],
    "aceMode": "xquery",
    "codemirrorMode": "xquery",
    "codemirrorMimeType": "application/xquery",
    "tmScope": "source.xq",
    "languageId": 402
  },
  "XS": {
    "type": "programming",
    "extensions": [
      ".xs"
    ],
    "tmScope": "source.c",
    "aceMode": "c_cpp",
    "codemirrorMode": "clike",
    "codemirrorMimeType": "text/x-csrc",
    "languageId": 403
  },
  "XSLT": {
    "type": "programming",
    "aliases": [
      "xsl"
    ],
    "extensions": [
      ".xslt",
      ".xsl"
    ],
    "tmScope": "text.xml.xsl",
    "aceMode": "xml",
    "codemirrorMode": "xml",
    "codemirrorMimeType": "text/xml",
    "color": "#EB8CEB",
    "languageId": 404
  },
  "Xojo": {
    "type": "programming",
    "color": "#81bd41",
    "extensions": [
      ".xojo_code",
      ".xojo_menu",
      ".xojo_report",
      ".xojo_script",
      ".xojo_toolbar",
      ".xojo_window"
    ],
    "tmScope": "source.xojo",
    "aceMode": "text",
    "languageId": 405
  },
  "Xonsh": {
    "type": "programming",
    "color": "#285EEF",
    "extensions": [
      ".xsh"
    ],
    "tmScope": "source.python",
    "aceMode": "text",
    "codemirrorMode": "python",
    "codemirrorMimeType": "text/x-python",
    "languageId": 614078284
  },
  "Xtend": {
    "type": "programming",
    "color": "#24255d",
    "extensions": [
      ".xtend"
    ],
    "tmScope": "source.xtend",
    "aceMode": "text",
    "languageId": 406
  },
  "YAML": {
    "type": "data",
    "color": "#cb171e",
    "tmScope": "source.yaml",
    "aliases": [
      "yml"
    ],
    "extensions": [
      ".yml",
      ".mir",
      ".reek",
      ".rviz",
      ".sublime-syntax",
      ".syntax",
      ".yaml",
      ".yaml-tmlanguage",
      ".yaml.sed",
      ".yml.mysql"
    ],
    "filenames": [
      ".clang-format",
      ".clang-tidy",
      ".gemrc",
      "glide.lock",
      "yarn.lock"
    ],
    "aceMode": "yaml",
    "codemirrorMode": "yaml",
    "codemirrorMimeType": "text/x-yaml",
    "languageId": 407
  },
  "YANG": {
    "type": "data",
    "extensions": [
      ".yang"
    ],
    "tmScope": "source.yang",
    "aceMode": "text",
    "languageId": 408
  },
  "YARA": {
    "type": "programming",
    "color": "#220000",
    "aceMode": "text",
    "extensions": [
      ".yar",
      ".yara"
    ],
    "tmScope": "source.yara",
    "languageId": 805122868
  },
  "YASnippet": {
    "type": "markup",
    "aliases": [
      "snippet",
      "yas"
    ],
    "color": "#32AB90",
    "extensions": [
      ".yasnippet"
    ],
    "tmScope": "source.yasnippet",
    "aceMode": "text",
    "languageId": 378760102
  },
  "Yacc": {
    "type": "programming",
    "extensions": [
      ".y",
      ".yacc",
      ".yy"
    ],
    "tmScope": "source.yacc",
    "aceMode": "text",
    "color": "#4B6C4B",
    "languageId": 409
  },
  "ZAP": {
    "type": "programming",
    "color": "#0d665e",
    "extensions": [
      ".zap",
      ".xzap"
    ],
    "tmScope": "source.zap",
    "aceMode": "text",
    "languageId": 952972794
  },
  "ZIL": {
    "type": "programming",
    "color": "#dc75e5",
    "extensions": [
      ".zil",
      ".mud"
    ],
    "tmScope": "source.zil",
    "aceMode": "text",
    "languageId": 973483626
  },
  "Zeek": {
    "type": "programming",
    "aliases": [
      "bro"
    ],
    "extensions": [
      ".zeek",
      ".bro"
    ],
    "tmScope": "source.zeek",
    "aceMode": "text",
    "languageId": 40
  },
  "ZenScript": {
    "type": "programming",
    "color": "#00BCD1",
    "extensions": [
      ".zs"
    ],
    "tmScope": "source.zenscript",
    "aceMode": "text",
    "languageId": 494938890
  },
  "Zephir": {
    "type": "programming",
    "color": "#118f9e",
    "extensions": [
      ".zep"
    ],
    "tmScope": "source.php.zephir",
    "aceMode": "php",
    "languageId": 410
  },
  "Zig": {
    "type": "programming",
    "color": "#ec915c",
    "extensions": [
      ".zig"
    ],
    "tmScope": "source.zig",
    "aceMode": "text",
    "languageId": 646424281
  },
  "Zimpl": {
    "type": "programming",
    "color": "#d67711",
    "extensions": [
      ".zimpl",
      ".zmpl",
      ".zpl"
    ],
    "tmScope": "none",
    "aceMode": "text",
    "languageId": 411
  },
  "cURL Config": {
    "type": "data",
    "group": "INI",
    "aliases": [
      "curlrc"
    ],
    "filenames": [
      ".curlrc",
      "_curlrc"
    ],
    "tmScope": "source.curlrc",
    "aceMode": "text",
    "languageId": 992375436
  },
  "desktop": {
    "type": "data",
    "extensions": [
      ".desktop",
      ".desktop.in"
    ],
    "tmScope": "source.desktop",
    "aceMode": "text",
    "languageId": 412
  },
  "dircolors": {
    "type": "data",
    "extensions": [
      ".dircolors"
    ],
    "filenames": [
      ".dir_colors",
      ".dircolors",
      "DIR_COLORS",
      "_dir_colors",
      "_dircolors",
      "dir_colors"
    ],
    "tmScope": "source.dircolors",
    "aceMode": "text",
    "languageId": 691605112
  },
  "eC": {
    "type": "programming",
    "color": "#913960",
    "extensions": [
      ".ec",
      ".eh"
    ],
    "tmScope": "source.c.ec",
    "aceMode": "text",
    "languageId": 413
  },
  "edn": {
    "type": "data",
    "aceMode": "clojure",
    "codemirrorMode": "clojure",
    "codemirrorMimeType": "text/x-clojure",
    "extensions": [
      ".edn"
    ],
    "tmScope": "source.clojure",
    "languageId": 414
  },
  "fish": {
    "type": "programming",
    "color": "#4aae47",
    "group": "Shell",
    "interpreters": [
      "fish"
    ],
    "extensions": [
      ".fish"
    ],
    "tmScope": "source.fish",
    "aceMode": "text",
    "languageId": 415
  },
  "jq": {
    "color": "#c7254e",
    "aceMode": "text",
    "type": "programming",
    "extensions": [
      ".jq"
    ],
    "tmScope": "source.jq",
    "languageId": 905371884
  },
  "mIRC Script": {
    "type": "programming",
    "color": "#3d57c3",
    "extensions": [
      ".mrc"
    ],
    "tmScope": "source.msl",
    "aceMode": "text",
    "languageId": 517654727
  },
  "mcfunction": {
    "type": "programming",
    "color": "#E22837",
    "extensions": [
      ".mcfunction"
    ],
    "tmScope": "source.mcfunction",
    "aceMode": "text",
    "languageId": 462488745
  },
  "mupad": {
    "type": "programming",
    "color": "#244963",
    "extensions": [
      ".mu"
    ],
    "tmScope": "source.mupad",
    "aceMode": "text",
    "languageId": 416
  },
  "nanorc": {
    "type": "data",
    "color": "#2d004d",
    "group": "INI",
    "extensions": [
      ".nanorc"
    ],
    "filenames": [
      ".nanorc",
      "nanorc"
    ],
    "tmScope": "source.nanorc",
    "aceMode": "text",
    "languageId": 775996197
  },
  "nesC": {
    "type": "programming",
    "color": "#94B0C7",
    "extensions": [
      ".nc"
    ],
    "aceMode": "text",
    "tmScope": "source.nesc",
    "languageId": 417
  },
  "ooc": {
    "type": "programming",
    "color": "#b0b77e",
    "extensions": [
      ".ooc"
    ],
    "tmScope": "source.ooc",
    "aceMode": "text",
    "languageId": 418
  },
  "q": {
    "type": "programming",
    "extensions": [
      ".q"
    ],
    "tmScope": "source.q",
    "aceMode": "text",
    "color": "#0040cd",
    "languageId": 970539067
  },
  "reStructuredText": {
    "type": "prose",
    "color": "#141414",
    "wrap": true,
    "aliases": [
      "rst"
    ],
    "extensions": [
      ".rst",
      ".rest",
      ".rest.txt",
      ".rst.txt"
    ],
    "tmScope": "text.restructuredtext",
    "aceMode": "text",
    "codemirrorMode": "rst",
    "codemirrorMimeType": "text/x-rst",
    "languageId": 419
  },
  "robots.txt": {
    "type": "data",
    "aliases": [
      "robots",
      "robots txt"
    ],
    "filenames": [
      "robots.txt"
    ],
    "aceMode": "text",
    "tmScope": "text.robots-txt",
    "languageId": 674736065
  },
  "sed": {
    "type": "programming",
    "color": "#64b970",
    "extensions": [
      ".sed"
    ],
    "interpreters": [
      "gsed",
      "minised",
      "sed",
      "ssed"
    ],
    "aceMode": "text",
    "tmScope": "source.sed",
    "languageId": 847830017
  },
  "wdl": {
    "type": "programming",
    "color": "#42f1f4",
    "extensions": [
      ".wdl"
    ],
    "tmScope": "source.wdl",
    "aceMode": "text",
    "languageId": 374521672
  },
  "wisp": {
    "type": "programming",
    "aceMode": "clojure",
    "codemirrorMode": "clojure",
    "codemirrorMimeType": "text/x-clojure",
    "color": "#7582D1",
    "extensions": [
      ".wisp"
    ],
    "tmScope": "source.clojure",
    "languageId": 420
  },
  "xBase": {
    "type": "programming",
    "color": "#403a40",
    "aliases": [
      "advpl",
      "clipper",
      "foxpro"
    ],
    "extensions": [
      ".prg",
      ".ch",
      ".prw"
    ],
    "tmScope": "source.harbour",
    "aceMode": "text",
    "languageId": 421
  }
}