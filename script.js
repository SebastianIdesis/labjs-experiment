// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {
        "samplevideo.mp4": "embedded\u002Fd788d895cd26381937b57992052d74957f2104fc4227856c99d70b12c67d06d3.mp4"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "testvideo",
      "content": "\u003Cvideo width=\"100%\" controls autoplay\u003E\r\n    \u003Csource src=\"https:\u002F\u002Fgithub.com\u002FSebastianIdesis\u002Flabjs-experiment\u002Fblob\u002Fmain\u002Fsamplevideo.mp4\" type=\"video\u002Fmp4\"\u003E\r\n    Your browser does not support the video tag.\r\n\u003C\u002Fvideo\u003E"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 329.09,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Si funciona esto la vida\nva a ser mas facil",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": -38,
          "top": 0,
          "angle": 0,
          "width": 52.2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Yes",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": -200,
          "top": 25,
          "angle": 0,
          "width": 207.48000000000002,
          "height": 286.14,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"Flyer_InfoViz_TID.png\"] }",
          "autoScale": undefined
        },
        {
          "type": "aoi",
          "left": -200,
          "top": 150,
          "angle": 0,
          "width": 262.03,
          "height": 262.03,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": ""
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "samplevideo.mp4": "embedded\u002Fd788d895cd26381937b57992052d74957f2104fc4227856c99d70b12c67d06d3.mp4",
        "Flyer_InfoViz_TID.png": "embedded\u002Fa2d9c65d4e0eb33d5353c2b4459080770e9eca2ebd723e920597abb7c86d1618.png"
      },
      "responses": {
        "click": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Stimulus"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 149.42,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Thank you",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen"
    }
  ]
})

// Let's go!
study.run()