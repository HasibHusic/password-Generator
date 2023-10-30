const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword() {
        let leftPassword = " ";   
        let rightPassword = " "; 
        let numberOfCharecters = 0;
        for (let i = 0; i < 15; i++) {
                leftPassword += characters[Math.floor(Math.random() * characters.length)];
                rightPassword += characters[Math.floor(Math.random() * characters.length)];
        }   
        document.getElementById("left-password").textContent = leftPassword;
        document.getElementById("right-password").textContent = rightPassword;
      }

function clearPassword() {
    window.location.reload()
}