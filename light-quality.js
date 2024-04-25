export class LightQuality {  
    constructor() {
      this.imageCanvas = null;
      this.imageCtx = null;
      this.offscreenCanvas = null;
      this.offscreenCtx = null;
      this.thresholdCanvas = null;
      this.thresholdCtx = null;
      this.t3Canvas = null;
      this.t3Ctx = null;
      this.brightnessCanvas = null;
      this.brightnessCtx = null;
      this.video = null;
      this.html = null;
      this.rangeBrightness = 50;
      this.rangeThreshold = 30;
      this.thPercent = 0;    
      this.overPercent = 0;    
      this.underPercent = 0;    
      this.currentBrightness = 0;
      this.minBrightness = 15;
    }
    
    async init() {
      let container = document.querySelector("#container");
      this.imageCanvas = container.querySelector( 'canvas:not([class]):not([id])' );
      this.imageCtx = this.imageCanvas.getContext('webgl2');
      this.offscreenCanvas = document.querySelector( '#offscreen-canvas' );
      this.offscreenCtx = this.offscreenCanvas.getContext('2d', { willReadFrequently: true });
      this.thresholdCanvas = document.getElementById( 'threshold-canvas' );
      this.thresholdCtx = this.thresholdCanvas.getContext('2d');
      this.t3Canvas = document.getElementById( 't3-canvas' );
      this.t3Ctx = this.t3Canvas.getContext('2d');
      this.brightnessCanvas = document.getElementById( 'brightness-canvas' );
      this.brightnessCtx = this.brightnessCanvas.getContext('2d');
      this.video = container.querySelector('video');
      
      this.html = document.querySelector('#low-light-text');
      
      //this.imageCanvas.height = 500;
      //this.imageCanvas.width = 500;
      this.thresholdCanvas.height = this.imageCanvas.height/2;
      this.thresholdCanvas.width = this.imageCanvas.width/2;
      this.brightnessCanvas.height = this.imageCanvas.height/2;
      this.brightnessCanvas.width = this.imageCanvas.width/2;
      this.t3Canvas.height = this.imageCanvas.height/2;
      this.t3Canvas.width = this.imageCanvas.width/2;
      
      setTimeout(this.brightnessSwitch.bind(this), 5000);
      
      this.update();
    }
    
    update(){
      let alpha,data;
  
      if(this.rangeBrightness < 50){
        alpha = 0-((1-(this.rangeBrightness/50))*255);
      } else {
        alpha = ((this.rangeBrightness-50)/50)*255;
      }
  
      const pixThreshold = this.rangeThreshold;
      
      
      this.offscreenCtx.drawImage(this.video,0,0);
      var imageData = this.offscreenCtx.getImageData(0,0, this.offscreenCanvas.width, this.offscreenCanvas.height);
  
      //data = this.brightness(this.imageCtx.getImageData(0,0,this.imageCanvas.width,this.imageCanvas.height), alpha);
      //this.imageCtx.putImageData(data,0,0);
  
  
  //     this.thresholdCtx.drawImage(this.imageCanvas, 0, 0,this.imageCanvas.width, this.imageCanvas.height, 0,0,this.thresholdCanvas.width,this.thresholdCanvas.height);
  //     data = this.threshold(this.thresholdCtx.getImageData(0,0,this.thresholdCanvas.width,this.thresholdCanvas.height),pixThreshold);
  //     this.thresholdCtx.putImageData(data,0,0);
  //     //document.getElementById( 'samples' ).innerHTML = Math.round(this.thPercent*100*100)/100+'%';
  
  //     this.t3Ctx.drawImage(this.imageCanvas, 0, 0,this.imageCanvas.width, this.imageCanvas.height, 0,0,this.t3Canvas.width,this.t3Canvas.height);
  //     data = this.threshold3(this.t3Ctx.getImageData(0,0,this.t3Canvas.width,this.t3Canvas.height),pixThreshold, 55,200);
  //     this.t3Ctx.putImageData(data,0,0);
      //document.getElementById( 'samples-under' ).innerHTML = Math.round(underPercent*100*100)/100+'%';
      //document.getElementById( 'samples-over' ).innerHTML = Math.round(overPercent*100*100)/100+'%';
  
  
      data = this.average(this.offscreenCtx.getImageData(0,0,this.imageCanvas.width,this.imageCanvas.height));
       //document.getElementById( 'avg-brightness' ).innerHTML = Math.round(((0.2126*data.r + 0.7152*data.g + 0.0722*data.b)/255)*100*100)/100+'%';
      //this.brightnessCtx.fillStyle = 'rgb('+data.r+','+data.g+','+data.b+')';
      //this.brightnessctx.fillRect(0,0,brightnessCanvas.width,brightnessCanvas.height);
      this.currentBrightness = Math.round(((0.2126*data.r + 0.7152*data.g + 0.0722*data.b)/255)*100*100)/100;
      
      if(this.currentBrightness < this.minBrightness) {   
        if (!this.html.classList.contains("fadein1s")) {
          if (this.html.classList.contains("fadeout1s")) {          
            this.html.classList.remove("fadeout1s");
          }
          this.html.classList.add("fadein1s")
        };
      } else {           
        if (!this.html.classList.contains("fadeout1s")) {
          this.html.classList.remove("fadein1s");
          this.html.classList.add("fadeout1s");
        };
      }
      setTimeout(this.update.bind(this), 500);
    }
    
    brightnessSwitch() {
      this.minBrightness = 2;
    }
    
    brightness(pixels, adjustment) {
      var d = pixels.data;
      for (var i=0; i<d.length; i+=4) {
        d[i] += adjustment;
        d[i+1] += adjustment;
        d[i+2] += adjustment;
      }
      return pixels;
    };
    
    threshold(imgData, threshold) {
      this.thPercent=1;
      var d = imgData.data;
      for (var i=0; i<d.length; i+=4) {
        var v = (0.2126*d[i] + 0.7152*d[i+1] + 0.0722*d[i+2] >= threshold) ? 255 : 0;
        d[i] = d[i+1] = d[i+2] = v;
        if(v===255){
          this.thPercent++;
        }
      }
      this.thPercent=this.thPercent/(d.length/4);
      return imgData;
    };
    
    threshold3(imgData, threshold,floor,ceil) {
      this.underPercent=1;
      this.overPercent=1;
      var d = imgData.data, f,b,c,v;
      for (var i=0; i<d.length; i+=4) {
        b = 0.2126*d[i] + 0.7152*d[i+1] + 0.0722*d[i+2];
        if (b >= ceil){
          d[i] = 255;
          d[i+1] = 255;
          d[i+2] = 0;
          this.overPercent++;
        } else if(b <= floor){
          d[i] = 255;
          d[i+1] = 0;
          d[i+2] = 0;
          this.underPercent++;
        } else {
          v = (b >= threshold) ? 255 : 0
          d[i] = v;
          d[i+1] = v;
          d[i+2] = v;
        }
      }
      this.overPercent=this.overPercent/(d.length/4);
      this.underPercent=this.underPercent/(d.length/4);
  
      return imgData;
    };
    
    average(imgData) {
      var d = imgData.data;
      var rgb ={r:0,g:0,b:0};
      for (var i=0; i<d.length; i+=4) {
        rgb.r += d[i];
        rgb.g += d[i+1];
        rgb.b += d[i+2];
      }
  
      rgb.r = ~~(rgb.r/(d.length/4));
      rgb.g = ~~(rgb.g/(d.length/4));
      rgb.b = ~~(rgb.b/(d.length/4));
  
      return rgb;
    };
  }