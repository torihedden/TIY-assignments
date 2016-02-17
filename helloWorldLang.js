helloWorld = function(lang){
  if (lang === "es"){
      console.log("Hola, Mundo!");
  } else if (lang === "de"){
      console.log("Hallo, Welt!");
  } else if (lang === "fr"){
      console.log("Bonjour, le monde!");
  } else if (lang === "en"){
      console.log("Hello, world!");
  } else {
      console.log("Hello, world!");
  }
};

helloWorld(""); // => "Hello, world!"
helloWorld("de"); // => "Hallo, Welt!"
helloWorld("en"); // => "Hello, world!"
helloWorld("fr"); // => "Bonjour, le monde!"
helloWorld("es"); // => "Hola, Mundo!"
