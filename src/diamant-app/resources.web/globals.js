var _ = {};
var _typeList = {"none":""
                ,"main":"Hauptmahlzeit"
                ,"small":"Zwischenmahlzeit"
                ,"adjust":"Ausgleichsmahlzeit"
                ,"after":"Nach Mahlzeit"
                ,"brtest":"Basalraten-Test"
                ,"betest":"BE-Faktoren-Test"
                ,"adjusttest":"Korrektur-Faktoren-Test"};
var _units = {"stueck":"Stück","gramm":"Gramm","tafeln":"Tafeln","riegel":"Riegel",
              "tueten":"Tüten","glaeser":"Gläser","scheiben":"Scheiben",
              "becher":"Becher","milliliter":"Milliliter","dosen":"Dosen"};
var _unit = {"stueck":"Stück","gramm":"Gramm","tafeln":"Tafel","riegel":"Riegel",
             "tueten":"Tüte","glaeser":"Glas","scheiben":"Scheibe",
             "becher":"Becher","milliliter":"Milliliter","dosen":"Dose"};

function Num(text)
{
  if(typeof text != "stringValue")
    return text;
    
  return Number(text.replace(",","."));
}
function mm(pt){return pt/0.35277;}
function cm(pt){return pt/0.035277;}