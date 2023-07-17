fetch('infos.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('Alıntılar yüklenirken bir hata oluştu:', err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("cards");
    mainContainer.innerHTML = '';
    
    for (var i = 0; i < data.length; i++) {
        var infosDiv = document.createElement("div");
        infosDiv.classList.add('infoContent');
        
        var first = document.createElement("div");
        first.classList.add('firstContent');
        var second = document.createElement("div");
        second.classList.add('secondContent');
        var third = document.createElement("div");
        third.classList.add('thirdContent');
        var forth = document.createElement("div");
        forth.classList.add('forthContent');
        var fifth = document.createElement("div");
        fifth.classList.add('fifthContent');

        const pictureTextElement = document.createElement('img');
        pictureTextElement.id= "infoImg";
        pictureTextElement.src = data[i].picture;
        first.appendChild(pictureTextElement);

        if (data[i]._badge.trim() !== "") {
          const _badgeTextElement = document.createElement('p');
          _badgeTextElement.id = "badge";
          _badgeTextElement.textContent = data[i]._badge;
          second.appendChild(_badgeTextElement);}
        


        const _idTextElement = document.createElement('p');
        _idTextElement.id= "info";
        _idTextElement.textContent =  'id= ' + data[i]._id;
        forth.appendChild(_idTextElement);

        const NameTextElement = document.createElement('p');
        NameTextElement.id= "info";
        NameTextElement.textContent = 'fullname= ' + data[i].name + ' ' + data[i].surname;
        third.appendChild(NameTextElement);

        const genderTextElement = document.createElement('p');
        genderTextElement.id= "info";
        genderTextElement.textContent = 'gender= ' + data[i].gender;
        forth.appendChild(genderTextElement);

        const emailTextElement = document.createElement('p');
        emailTextElement.id= "info";
        emailTextElement.textContent = 'mail= ' + data[i].email;
        third.appendChild(emailTextElement);

    //   infosDiv.innerHTML = data[i].name + ' ' + data[i].surname;
      mainContainer.appendChild(infosDiv);
      infosDiv.appendChild(first);
      infosDiv.appendChild(second);
      infosDiv.appendChild(third);
      infosDiv.appendChild(forth);
      infosDiv.appendChild(fifth);
    }
  }