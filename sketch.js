let song;
let fft;
let playing = false;
let started = false;
let amplitude;
let particles = [];

function preload() {
  song = loadSound('assets/musica.mp3');
}

function setup() {
  let canvas = createCanvas(420, 180);
  canvas.parent('musicBox');

  select('#playButton').mousePressed(togglePlay);
  select('#restartButton').mousePressed(restartSong);
  select('#forwardButton').mousePressed(() => skipTime(5));
  select('#backButton').mousePressed(() => skipTime(-5));

  fft = new p5.FFT();
  fft.setInput(song);
  
  // Configurar el analizador de amplitud para las partículas
  amplitude = new p5.Amplitude();
  amplitude.setInput(song);
  
  // Inicializar partículas
  initializeParticles();
  
  noFill();
}

function draw() {
  background(22, 27, 34, 180); // fondo opaco

  // Dibujar partículas flotantes
  drawParticles();

  // Dibujar onda de audio
  let waveform = fft.waveform();
  stroke(88, 166, 255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}

function initializeParticles() {
  particles = [];
  
  // Crear 30 partículas flotantes
  for (let i = 0; i < 30; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      speed: random(0.3, 1.5),
      alpha: random(50, 150),
      color: {
        r: 88,
        g: 166,
        b: 255
      }
    });
  }
}

function drawParticles() {
  // Solo mostrar partículas si hay audio reproduciéndose
  if (!playing) return;
  
  // Obtener el nivel de volumen
  let vol = amplitude.getLevel();
  
  // Dibujar cada partícula
  for (let particle of particles) {
    // Mover la partícula hacia arriba
    particle.y -= particle.speed + vol * 2;
    
    // Si la partícula sale por arriba, reiniciarla abajo
    if (particle.y < 0) {
      particle.y = height;
      particle.x = random(width);
    }
    
    // Configurar color con transparencia dinámica
    fill(
      particle.color.r, 
      particle.color.g, 
      particle.color.b, 
      particle.alpha + vol * 80
    );
    noStroke();
    
    // Dibujar la partícula
    ellipse(
      particle.x, 
      particle.y, 
      particle.size + vol * 3,
      particle.size + vol * 3
    );
  }
}

function togglePlay() {
  const btn = select('#playButton');

  if (!started) {
    song.play();
    btn.html('Pausar');
    started = true;
    playing = true;
  } else if (playing) {
    song.pause();
    btn.html('Reanudar');
    playing = false;
  } else {
    song.play();
    btn.html('Pausar');
    playing = true;
  }
}

function restartSong() {
  song.stop();
  song.play();
  select('#playButton').html('Pausar');
  started = true;
  playing = true;
}

function skipTime(seconds) {
  let newTime = song.currentTime() + seconds;
  newTime = constrain(newTime, 0, song.duration());
  song.jump(newTime);
}