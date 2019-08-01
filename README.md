# KittyMoments
## 고양이 원격 관찰 앱

- User can capture images and record videos on screen
- Moments are instantly displayed in Gallery on right Tab!

![Preview](https://raw.githubusercontent.com/mandoolala/KittyMoments/master/web_screenshot.png)
![Preview](https://raw.githubusercontent.com/mandoolala/KittyMoments/master/myraspberrypiathome.png)

## You need:

RaspberryPi Model 3B+ <br />
Camera Module V2 <br />
Jumper Cable/Breadboard/PIR Sensor (for auto-capture mode) <br />

## TODO

Movement Detection using PIR sensor 
upload using python flask server

# Installation on Raspberry Pi

turn on UV4L api
```
uv4l --auto-video_nr --driver raspicam --encoding mjpeg --width 1640 --height 920 --framerate 30 --server-option '--port=9000' '–editable-config-file’ —server-option '–www-acao=*' —server-option '-–enable-webrtc=yes' —server-option '–enable-webrtc-video=yes'
```


# Installation on WEB

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
