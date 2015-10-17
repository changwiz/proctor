 var patterns = {
      name: {
          ssn: ["SSN",
              "social security number"],
          username: ["username", "uname"],
          password: ["password", "pword", "pwd"],
          email: ["email", "mail to"],
          telephone: ["telephone", "tel"],
          IBAN: ["IBAN", "bank account",
              "international bank account"]
      },
      value: {
          ssn: ["ˆ\d{3}-\d{2}-\d{4}$"],
          email: ["\b[A-Z0-9. %+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b"],
          telephone: ["/ˆ\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/"],
          IBAN: ["[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9][{4}[0-9]{7}([a-zA-Z0-9]?){0,16}"]
      }
  };
      function matchName(name) {
          var ssn = patterns.name.ssn;
          for (var i = 0; i < ssn.length; ++i) {
              if (name === ssn[i]) {
                  return true;
              }
          }
          var username = patterns.name.username;
          for (i = 0; i < username.length; ++i) {
              if (name === username[i]) {
                  return true;
              }
          }
          var password = patterns.name.password;
          for (i = 0; i < password.length; ++i) {
              if (name === password[i]) {
                  return true;
              }
          }
          var email = patterns.name.email;
          for (i = 0; i < email.length; ++i) {
              if (name === email[i]) {
                  return true;
              }
          }
          var telephone = patterns.name.telephone;
          for (i = 0; i < telephone.length; ++i) {
              if (name === telephone[i]) {
                  return true;
              }
          }
          var iban = patterns.name.IBAN;
          for (i = 0; i < iban.length; ++i) {
              if (name === iban[i]) {
                  return true;
              }
          }
          return false;
      }
      function htmlTree(obj) {
          var obj = obj || document.getElementsByTagName('body')[0];
          if (!obj.hasAttribute('sensitivity')) {
           if (obj.type === "password" || obj.type === "hidden") {
                  obj.setAttribute('sensitivity', 'sensitive');
              } else if (obj.hasAttribute('id')) {
                  if (matchName(obj.id)) {
                      obj.setAttribute('sensitivity', 'sensitive');
                  }

              } else if (obj.hasAttribute('name') ){
                  if (matchName(obj.name)) {
                      obj.setAttribute('sensitivity', 'sensitive');
                  }
              }
              }
              if (obj.hasChildNodes()) {
                  var child = obj.firstChild;
                  while (child) {
                      if (child.nodeType === 1 && child.nodeName != 'SCRIPT') {
                          htmlTree(child);
                      }
                      child = child.nextSibling;
                  }
              }
          }
htmlTree();