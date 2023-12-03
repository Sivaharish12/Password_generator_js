function generatePassword() {
    var charlist = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var spllist = '!`@#$%^&*()-_+=/[]{};:"<>,.';
    var numlist = '1234567890';

    var no_char = document.getElementById("charInput").value;
    var no_spl = document.getElementById("splInput").value;
    var no_num = document.getElementById("numInput").value;

    var password = "";
    for (var i = 0; i < no_char; i++) {
        password += charlist.charAt(Math.floor(Math.random() * charlist.length));
    }
    for (var i = 0; i < no_spl; i++) {
        password += spllist.charAt(Math.floor(Math.random() * spllist.length));
    }
    for (var i = 0; i < no_num; i++) {
        password += numlist.charAt(Math.floor(Math.random() * numlist.length));
    }

    var password_list = password.split('');
    password_list.sort(function() { return 0.5 - Math.random() });

    var generatedPassword = password_list.join('');
    document.getElementById("generatedPassword").innerText = "Generated Password: " + generatedPassword;
}
