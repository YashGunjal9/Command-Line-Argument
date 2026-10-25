console.log("Command line");

function greeUser(name) {
    console.log(`Good Day ${name}`);    
}

const getUser = process.argv[2]
greeUser(getUser);

// greeUser(`AstreTech`);

// console.log(process.argv[2]);