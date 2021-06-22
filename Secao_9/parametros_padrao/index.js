function greetPilot (nome, mensagem = "Olá"){
    alert(mensagem + ', ' + nome)               
  }
  
  greetPilot() // Se não delcararmos nem o nome, ele ira ser retornado como undefined, isso mostra também que 
               // não devemos necessáriamente colocar valores padrões para todos parâmetros, isso depende totalmente da lógica da função
  
  function speedUp (velocity, unity = 'km/s', acelleration){
    let newVelocity = velocity + acelleration
    alert("Nova velocidade: " + newVelocity + unity)
    
  }
  
  speedUp(50, 20) // A pegadinha nesse caso foi que invés de velocity ter ovalor 50 e acelleration ter o valor 20, velocity teve o valor 50 e unity valor 20 e acelleartion NaN.
                  // Podemos arrumar alterando a ordem dos parâmetros desta forma :velocity,  acelleration, unity = 'km/s'