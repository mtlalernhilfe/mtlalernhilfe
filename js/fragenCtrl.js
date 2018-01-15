angular.module('mainApp', []).controller('fragenCtrl', ['$scope', function ($scope) {

    $scope.fragenArray = [
        {
            frage: "In welcher Reifungsstufe der Erythropoese beginnt die Hämoglobinsynthese?",
            zuordnung: "Frage1",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Leukämie fällt unter die reifzelligen B-Zell-Neoplasien?",
            zuordnung: "Frage2",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "In welchem/welchen Organ(en) findet die Erythropoese beim Neugeborenen statt?",
            zuordnung: "Frage3",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Bei welcher Erkrankungsgruppe spielt das vermehrte Auftreten von basophilen Granulozyten eine Rolle?",
            zuordnung: "Frage4",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Durch welche spezifische Besonderheit sind die Retikulozyten charakterisiert?",
            zuordnung: "Frage5",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Der Nachweis von Auerstäbchen im Zytoplasma ist praktisch beweisend für",
            zuordnung: "Frage6",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Die früheste mittels Pappenheimfärbung identifizierbare rote Vorstufe heißt",
            zuordnung: "Frage7",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Das besondere am AB0-System ist",
            zuordnung: "Frage8",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Eine Patientin zeigt folgende Antikörper im Serum: Anti-B, Anti-D, Anti-K. Demnach hat die Frau folgende Blutgruppe:",
            zuordnung: "Frage9",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Beim Nachweis eines D kat VI im indirekten Coombstest handelt es sich um den Nachweis von",
            zuordnung: "Frage10",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aussage über den MHN trifft nicht zu:",
            zuordnung: "Frage11",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Das Plasmazellmyelom geht nicht einher mit einer",
            zuordnung: "Frage12",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Die Komponenten der Immunphänotypisierung sind",
            zuordnung: "Frage13",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Die Polyzythämia vera ist nicht verbunden mit einer",
            zuordnung: "Frage14",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Die Kombination „schwere normochrome normozytäre Anämie, keine wesentliche Veränderung von Granulozyten und Thrombozyten, Mangel an roten Vorstufen im Knochenmark“ spricht für",
            zuordnung: "Frage15",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aufgabe haben sensibilisierte Coombserythrozyten im Röhrchentest?",
            zuordnung: "Frage16",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welcher Gerinnungsfaktormangel  beeinflusst die PTT nicht?",
            zuordnung: "Frage17",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche der folgenden lymphatischen B-Zell-Neoplasien würden Sie als aleukämisch typisieren?",
            zuordnung: "Frage18",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aussage über Transferrin trifft nicht zu?",
            zuordnung: "Frage19",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Mit welcher Untersuchung können Sie den Verdacht auf lymphatische Blasten bestätigen?",
            zuordnung: "Frage20",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Von welchem der folgenden Faktoren wird das Ergebnis der PTZ beeinflusst?",
            zuordnung: "Frage21",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Ein Mensch hält sich ständig in großer Höhenlage auf. Welche der folgenden Zellarten ist vermehrt?",
            zuordnung: "Frage22",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Die Erythrozytenlebensdauer beträgt",
            zuordnung: "Frage23",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Blutungslokalisationen sind besonders bezeichnend für die Hämophilie A?",
            zuordnung: "Frage24",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Leukozytenart ist beim akuten bakteriellen Infekt am stärksten vermehrt?",
            zuordnung: "Frage25",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Zur Symptomatik der Eisenmangelanämie gehört nicht",
            zuordnung: "Frage26",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "In welchen Zellorganellen findet die Hämoglobinsynthese statt?",
            zuordnung: "Frage27",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Ein massiver Thrombozytenabfall nach einer ausgedehnten Verbrennung spricht für das Vorliegen einer",
            zuordnung: "Frage28",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Zellen erkennen Sie durch den positiven Nachweis der POX?",
            zuordnung: "Frage29",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Plasmen sind zur Plasmatransfusion an einem Patienten der Blutgruppe AB geeignet?",
            zuordnung: "Frage30",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Wie verhalten sich Erythrozyten in hypertonen Lösungen?",
            zuordnung: "Frage31",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Zu HLA-Antigenen der Klasse I, die auch auf Thrombozyten zu finden sind, gehört beispielsweise folgendes Antigen:",
            zuordnung: "Frage32",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aussage ist falsch? Kälteagglutinine (Anti-I)",
            zuordnung: "Frage33",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Strukturen können unter bestimmten Umständen in den Plasmazellen nachgewiesen werden?",
            zuordnung: "Frage34",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aussage trifft nicht zu?",
            zuordnung: "Frage35",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Sie lesen folgendes Blutgruppen-Testergebnis ab: Agglutination mit Anti-B, Agglutination mit Anti-AB, Agglutination mit Anti-D blend nach der Coombsphase. Das entspricht dem Befund:",
            zuordnung: "Frage36",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Auf welcher Reifungsstufe der Erythropoese erfolgt die Kernausstoßung?",
            zuordnung: "Frage37",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Ringsideroblasten sind charakteristisch für die Verdachtsdiagnose",
            zuordnung: "Frage38",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Zu welcher Erkrankung gehört  t(8;21)?",
            zuordnung: "Frage39",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Sie finden im peripheren Blutausstrich vom kleinen fünfjährigen Nikolaus folgende Beschreibung: uniformes Zellbild mit überwiegend mononucleären mittelgroßen Zellen. Erymorphologie unauffällig, Thrombos 50 G/l . Ihre Verdachtsdiagnose lautet",
            zuordnung: "Frage40",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Aussage trifft für das v.Willebrand-Jürgens-Syndrom zu?",
            zuordnung: "Frage41",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche Untersuchung kann hilfreich sein bei der Unterscheidung zwischen CLL und Plasmazellmyelom?",
            zuordnung: "Frage42",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Im Ausstrich sehen Sie beim  Mantelzelllymphom  typischerweise",
            zuordnung: "Frage43",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Mit welcher Färbung können Retikulozyten nachgewiesen werden?",
            zuordnung: "Frage44",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Finden Sie die falsche Aussage: MDS ist charakterisiert durch",
            zuordnung: "Frage45",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "In welchem Organ wird der größte Teil von EPO gebildet?",
            zuordnung: "Frage46",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "Welche der folgenden Aussagen ist falsch?",
            zuordnung: "Frage47",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "ein Patient zeigt folgende Gerinnungswerte: Quick 93 %, PTT 75 sec, PTZ 18 sec, Thrombo 367 G/l, Blutungszeit verlängert. Dies spricht für",
            zuordnung: "Frage48",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "die Fluoreszenz-in-situ-Hybridisierung bei Knochenmarksdiagnostik gehört zu",
            zuordnung: "Frage49",
            fach: "haematologie",
            kurs: "oberkurs"
        },
        {
            frage: "2",
            zuordnung: "Frage2",
            fach: "klinische",
            kurs: "oberkurs"
        },
        {
            frage: "3",
            zuordnung: "Frage3",
            fach: "histologie",
            kurs: "oberkurs"
        },
        {
            frage: "4",
            zuordnung: "Frage4",
            fach: "mikrobio",
            kurs: "oberkurs"
        }
    ];

    $scope.antwortenArray = [
        {
            antwortText: "",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage1",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage2",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage2",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage2",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage2",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage3",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage3",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage3",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage3",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage4",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage4",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage4",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage4",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage5",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage5",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage5",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage5",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage6",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage6",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage6",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage6",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage7",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage7",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage7",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage7",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage8",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage8",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage8",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage8",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage9",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage9",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage9",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage9",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage10",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage10",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage10",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage10",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage11",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage11",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage11",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage11",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage12",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage12",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage12",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage12",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage13",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage13",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage13",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage13",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage14",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage14",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage14",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage14",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage15",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage15",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage15",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage15",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage16",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage16",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage16",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage16",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage17",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage17",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage17",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage17",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage18",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage18",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage18",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage18",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage19",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage19",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage19",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage19",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage20",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage20",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage20",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage20",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage21",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage21",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage21",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage21",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage22",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage22",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage22",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage22",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage23",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage23",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage23",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage23",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage24",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage24",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage24",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage24",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage25",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage25",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage25",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage25",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage26",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage26",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage26",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage26",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage27",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage27",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage27",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage27",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage28",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage28",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage28",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage28",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage29",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage29",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage29",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage29",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage30",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage30",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage30",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage30",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage31",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage31",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage31",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage31",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage32",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage32",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage32",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage32",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage33",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage33",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage33",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage33",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage34",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage34",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage34",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage34",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage35",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage35",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage35",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage35",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage36",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage36",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage36",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage36",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage37",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage37",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage37",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage37",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage38",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage38",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage38",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage38",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage39",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage39",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage39",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage39",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage40",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage40",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage40",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage40",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage41",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage41",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage41",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage41",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage42",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage42",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage42",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage42",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage43",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage43",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage43",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage43",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage44",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage44",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage44",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage44",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage45",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage45",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage45",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage45",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage46",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage46",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage46",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage46",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage47",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage47",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage47",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage47",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage48",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage48",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage48",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage48",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        
        {
            antwortText: "",
            zuordnung: "Frage49",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage49",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage49",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "",
            zuordnung: "Frage49",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        


        {
            antwortText: "asdf",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "qwer",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "yxcv",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "poiu",
            zuordnung: "Frage1242",
            fach: "haematologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage2",
            fach: "klinische",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage3",
            fach: "histologie",
            korrekt: false,
            kurs: "oberkurs"
        },


        {
            antwortText: "Dies ist die korrekte Antwort 1",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: true,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 1",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 2",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        },
        {
            antwortText: "Dies ist die falsche Antwort 3",
            zuordnung: "Frage4",
            fach: "mikrobio",
            korrekt: false,
            kurs: "oberkurs"
        }
    ];

    $scope.fach = "";
    $scope.kurs = "";
    $scope.fragenText = "";
    $scope.showWeiter = false;
    $scope.showUebersicht = false;
    $scope.antwortenFuerFrage = [];
    $scope.richtigBeantwortet = 0;
    $scope.falschBeantwortet = 0;

    $scope.setFach = function (kurs, fach) {
        $scope.fach = fach;
        $scope.kurs = kurs;
        $scope.getFrage();
        $scope.fragenModus = true;
        $scope.showUebersicht = false;
    };

    $scope.getFrage = function () {
        $scope.fragenText = "";
        for (var i = 0; i < $scope.fragenArray.length; i++) {
            var frage = $scope.fragenArray[i];
            if (frage.kurs == $scope.kurs && frage.fach == $scope.fach && !frage.flag) {
                $scope.fragenText = frage.frage;
                frage.flag = true;
                $scope.getAntwortByFrage(frage);
                break;
            }
        }
        if ($scope.fragenText == "") {
            $scope.showUebersicht = true;
            $scope.fragenModus = false;
        }
    };

    $scope.getAntwortByFrage = function (frage) {
        $scope.antwortenFuerFrage = [];
        $scope.antwortenArray.forEach(function (antwort) {
            if (frage.fach === antwort.fach && frage.zuordnung === antwort.zuordnung && frage.kurs === antwort.kurs) {
                $scope.antwortenFuerFrage.push(antwort);
            }
        })
        $scope.antwortenFuerFrage.sort(function() {
            return 0.5 - Math.random();
        });
    }

    $scope.toggleFragenModus = function () {
        $scope.fragenModus = !$scope.fragenModus;
    }
    $scope.checkAntwort = function (antwort, id) {
        if (!$scope.showWeiter) {
            if (antwort.korrekt) {
                $scope.richtigBeantwortet++;
                document.getElementById(id).style.background = 'green';
            }
            else {
                $scope.falschBeantwortet++
                document.getElementById(id).style.background = 'red';
            }
            $scope.showWeiter = true;
        }
    }
    $scope.showHome = function () {
        $scope.showWeiter = false;
        $scope.showUebersicht = false;
        $scope.fragenModus = false;
        $scope.richtigBeantwortet = 0;
        $scope.falschBeantwortet = 0;
    }

    $scope.nextFrage = function () {
        $scope.showWeiter = false;
        for (var i = 0; i < 4; i++) {
            document.getElementById(i).style.background = 'lightslategray';
        }
        $scope.getFrage();
    }
}]);