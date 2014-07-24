alert("Welcome Back");


// Curtis Tate	
// SDI 1407
// Project 3 



// Global Variables 
 
 
 var warlock = "Otto";
 var witch1 = "LadySif"
 var witch2 = "Miff"
 var witch3 = "Tiff"
 var weapon1 = "Wand";
 var weapon2 = "Staff";
 var spell1 = "Fire Dragon flame";
 var spell2 = "Cosmic Rain"; 
 
 
 // Json Data
 
 
 var Different = {
	"Witches": {
			"witch1": { 
			"name": "Lady Sif",
			"powers": "Throw Ice Balls"
		},	
			"witch2": { 
			"name": "Miff",
			"Powers": "Throw Ice Shards"
	},
			"witch3": { 
			"name": "Tiff",
			"Powers": "Freeze things"
		}
	}
};


// Function
    
    var  chooseWeapon = function (warlockName, weapon1) {
		console.log("choose " + weapon1 + " warlock" + warlockName);
	var useWeapon = function(warlockName) {
	var weapon1 = "wand";
		console.log("choose " + weapon1 + warlockName);
	};	 
	useWeapon("warlock");
	useWeapon("witch1");
	console.log(warlockName + " choose " + weapon1);
}; 

console.log("The warlock arrives at the witch hideout");
console.log("",witch1,"conjures the biggest ice ball at him. ",warlock," conjure a wall of fire and stops it, and had to quickly choose" ,weapon1," or " ,weapon2,'.');
console.log("",weapon1," is faster and gives " ,warlock, " more movement. ",weapon2," is heavy and drains half of his magic energy.");


//Boolean Function

console.log("",warlock, " quickly conjure a force of fire over his body and went into a powerful trance to recharge.");

var recharge = {
	rechargeMethod: function(ringOfFire, beaconOfFlames){
	if (ringOfFire + beaconOfFlames > 0) {
	var fullyCharge = true 
	return fullCharge;
		}else{
		var notCharge = fasle 
		return notCharge;
	}
}
};





