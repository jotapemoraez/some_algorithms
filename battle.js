m1 = { id:"m1" ,attack:80, hp:100, defense: 50, speed:30};
m2 = { id: "m2", attack:60, hp:100, defense: 50, speed:40};


function doBattle(m1, m2) {

    var attacker = null;
    var defenser = null;
    var tmp = null;

    if (m1.speed === m2.speed) {
        attacker = (m1.attack > m2.attack) ? m1 : m2;      
    } else {
        attacker = (m1.attack > m2.attack) ? m1 : m2;
    }

    if (attacker === m1) {
        defenser = m2;
    } else {
        defenser = m1;
    }

    while (attacker.hp > 0 && defenser.hp > 0) {

        var damage = attacker.attack - defenser.defense;
        console.log(damage)
        if (attacker.attack <= defenser.defense)
            damage = 1;

        defenser.hp -= damage;

        console.log("attacker ", attacker.id, "made a damge of: ", damage)
        console.log( attacker.id, "hp : ",attacker.hp, "---", defenser.id,  "hp : ", defenser.hp)
        console.log( "--------------")
        tmp = attacker;
        attacker = defenser;
        defenser = tmp;

    }


    console.log("the winnder is: " , (attacker.hp > 0) ?attacker.id: defenser.id)

}

doBattle(m1,m2)