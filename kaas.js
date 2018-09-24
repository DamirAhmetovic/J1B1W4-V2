var geel = prompt("Is de kaas geel van kleur?")


    if (geel == "ja"){
    document.write ("de kaas is geel")
    var gaten = prompt("heeft de kaas gaten?")
}

        if (gaten =="ja"){
        document.write ("<br> de kaas heeft gaten")
        var duur = prompt("is de kaas duur?")
}

        else if (gaten =="nee"){
        document.write ("<br>de kaas heeft geen gaten")
        var hard = prompt("is de kaas hard als steen?")
}

            if (duur =="ja"){
            document.write("<br>de kaas is duur")
            document.write("<br>de kaas is Emmentaler")
}
            else if (duur =="nee"){
            document.write("<br>de kaas is niet duur")
            document.write("<br>de kaas is leerdammer")
}
             if (hard =="ja"){
             document.write("<br>de kaas is hard als steen")
             document.write("<br>de kaas is parmigiano reggiano")
}

             else if (hard == "nee"){
             document.write("<br>de kaas is niet hard als steen")
             document.write("<br>de kaas is goudse kaas")
}

else if (geel == "nee"){
    document.write ("de kaas is niet geel")
    var blauweSchimmel = prompt("heeft de kaas blauwe schimmel?")
}

    if (blauweSchimmel == "ja"){
        document.write("<br>de kaas heeft blauwe schimmel")
        var blauweSchimmelkorst = prompt("heeft de kaas een korst")
}
    else if (blauweSchimmel == "nee"){
        document.write("<br>de kaas heeft geen blauwe schimmel")
        var korst = prompt("heeft de kaas een korst")
}

        if (blauweSchimmelkorst == "ja"){
            document.write("<br>de kaas heeft korst")
            document.write("<br>de kaas is camembert")
}

        else if (blauweSchimmelkorst == "nee"){
            document.write("<br>de kaas heeft geen korst")
            document.write("<br>de kaas is mozzarella")
}

         if (korst == "ja"){
            document.write("<br>de kaas heeft een korst")
            document.write("<br>de kaas is bleu de rochbaron")
}
        else if (korst == "nee"){
            document.write("<br>de kaas heeft geen korst")
            document.write("<br>de kaas is fourme d'Ambert")
}
