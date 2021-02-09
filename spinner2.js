const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

let timeout = 0 ;

for (const char of spinner){
  //console.log(char) // output : |/-\\|/-\\|

  setTimeout (function() {
    process.stdout.write(`\r ${char}`);  //process.stdout.write ; similar to console.log but stay on same line
  }, timeout);

  timeout += 500

}

