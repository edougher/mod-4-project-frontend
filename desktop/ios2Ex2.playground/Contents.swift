

class yearsTo {
    
    var currentAge:Int
    let oldAge:Int
    
    init(_ currentAge: Int, _ oldAge: Int){
        self.currentAge = currentAge
        self.oldAge = oldAge
    }
    
    var yearsUntil: Int {
        return oldAge - currentAge
    }
    
}

var aaron = yearsTo(31, 64)


aaron.yearsUntil

aaron.oldAge

aaron.currentAge
    



