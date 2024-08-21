module.exports = function toReadable (number) {
    let n = number
    const units = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    
    const ty = {
        1: 'none',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    
    const hd = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    }

    if(n == 0){
        return 'zero'
    }
        let ed = 0;
        let des = 0;
        let sot = 0;
        n = n.toString();
        if(n.length == 1){
            return (units[n]);
        } else if(n.length == 2 && n < 20){
            return(units[n]);
        } else if(n.length == 2 && n >=20){
            des = n[0];
            ed = n[1];
            if(n%10 == 0){
                return ty[des];
            }
            return(ty[des] + ' ' + units[ed])
        }else if(n.length == 3 && n >= 100){
            sot = n[0];
            des = n[1];
            ed = n[2];
            if(n%100==0){
                return hd[sot];
            }
            let n2 = n[1] + n[2];
            n2 = Number(n2);
            n2=n2.toString();
            if(n2.length==1){
                return(hd[sot] + ' ' + units[n2]);
            } else if(n2.length == 2 && n2 < 20){
                return(hd[sot] + ' ' + units[n2]);
            } else if(n2.length == 2 && n2 >= 20){
                des = n2[0];
                ed = n2[1];
                if(ed == 0){
                    return(hd[sot] + ' ' + ty[des]);
                } else if(des == 0){
                    return(hd[sot] + ' ' + ty[ed]);
                }
                else{
                    return(hd[sot] + ' ' + ty[des] + ' ' + units[ed]);
                }
    
            }
    }
}
