function promptMe() {
    let userQuestion = prompt("Are you ready soldier?", '');

    if (userQuestion === 'Yes' ){
        let select = prompt ("What weapon do you prefer?");
    
    
     if  (select === "Pistol"){
        alert ("Lightweight, easily carryable lethal weapon. Good choice soldier. Welcome!");
     } else if (select === "Assault Rifle"){
        alert ("High firepower, more bullet capacity with plenty of customization. Welcome brave soldier!"); 
     } else if (select === "Sniper Rifle"){
        alert ("Long range, high-precision weapon. Deadly and silent. Welcome aboard snipers!");
     } else if (select === "Combat Knife"){
        alert ("For up close and personnal encounters, deadly on close quarter combat. Glad to have you Soldier!");
     } else if (select === null || select === ''){
        alert ("Cancelled");
     } else {alert ("Pick weapons mentioned on the site")}
    }

    if (userQuestion === 'No'){
     alert ("Tough Luck!Goodbye Civilian.");
    } else { alert ("Cancelled");}


}