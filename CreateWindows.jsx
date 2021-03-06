//
//создание модального Диалога
//

var win = new Window("dialog{text:'Progress',bounds:[100,100,400,150],\ 
bar:Progressbar{bounds:[20,20,280,31] , value:0,maxvalue:100}};");
win.show();

for(...){
    //do work here
    //update progress
    win.bar.value = ...;
}
win.close();

-----------------------------------------------------------------------

//
//создание НЕ модального окна
//

var win = new Window("window{text:'Progress',bounds:
[100,100,400,150],bar:Progressbar{bounds:[20,20,280,31] , 
value:0,maxvalue:100}};");
win.show();

for(...){
    //do work here
    //update progress
    win.bar.value = ...;
}
win.close();

------------------------------------------------------------------------

//
//
//Создание полноценого модального окна для выбора текстового файла:
//
//

var dlg=
"dialog{text:'Script Interface',bounds:[100,100,500,220],"+
"testFile:EditText{bounds:[10,40,310,60] , text:'' ,properties:{multiline:false,noecho:false,readonly:false}},"+
"Browse:Button{bounds:[320,40,390,61] , text:'<<' },"+
"statictext0:StaticText{bounds:[10,10,240,27] , text:'Please select Text File' ,properties:{scrolling:undefined,multiline:undefined}},"+
"Process:Button{bounds:[10,80,190,101] , text:'Process' },"+
"button2:Button{bounds:[210,80,390,101] , text:'Cancel' }};"
var win = new Window(dlg,'test');
win.center();
win.testFile.enabled=false;
win.Browse.onClick = function() { 
 selectedFile = File.openDialog("Please select TEXT file.","TEXT File:*.txt"); 
  if(selectedFile != null) win.testFile.text =  decodeURI(selectedFile.fsName);
}
win.Process.onClick = function() { 
 if(win.testFile.text == '') {
  alert("No text file has been selected!");
  return;
  }
 win.close(1);
 selectedFile.execute();
}
win.show();

//впрочем текстовый файл можно открыть проще:
var selectedFile = File.openDialog("Please select TEXT file.","TEXT File:*.txt");

--------------------------------------------------------------------------------------------------------------------


//
//
//знатный пример из http://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/
//Создание "Палитры"
//
//

#target estoolkit
var win, windowResource;

windowResource = "palette {  \
    orientation: 'column', \
    alignChildren: ['fill', 'top'],  \
    preferredSize:[300, 130], \
    text: 'ScriptUI Window - palette',  \
    margins:15, \
    \
    sliderPanel: Panel { \
        orientation: 'row', \
        alignChildren: 'right', \
        margins:15, \
        text: ' PANEL ', \
        st: StaticText { text: 'Value:' }, \
        sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] }, \
        te: EditText { text: '30', characters: 5, justify: 'left'} \
        } \
    \
    bottomGroup: Group{ \
        cd: Checkbox { text:'Checkbox value', value: true }, \
        cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \
        applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \
    }\
}"
 
win = new Window(windowResource);
 
win.bottomGroup.cancelButton.onClick = function() {
  return win.close();
};
win.bottomGroup.applyButton.onClick = function() {
  return win.close();
};
 
win.show();

-----------------------------------------------------------------------------------------------------------------------

//
//
//и еще пример оттуда http://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/
//Создание "Диалога"
//
//

#target estoolkit
var win, windowResource;

windowResource = "dialog {  \
    orientation: 'column', \
    alignChildren: ['fill', 'top'],  \
    preferredSize:[300, 130], \
    text: 'ScriptUI Window - dialog',  \
    margins:15, \
    \
    sliderPanel: Panel { \
        orientation: 'row', \
        alignChildren: 'right', \
        margins:15, \
        text: ' PANEL ', \
        st: StaticText { text: 'Value:' }, \
        sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] }, \
        te: EditText { text: '30', characters: 5, justify: 'left'} \
        } \
    \
    bottomGroup: Group{ \
        cd: Checkbox { text:'Checkbox value', value: true }, \
        cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \
        applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \
    }\
}"

win = new Window(windowResource);

win.bottomGroup.cancelButton.onClick = function() {
  return win.close();
};
win.bottomGroup.applyButton.onClick = function() {
  return win.close();
};

win.show();

-----------------------------------------------------------------------------------------------------------------

//
//
//Но эти палитры и диалоги не будут показываться долго в фотошопе! Появятся на мгновение и изчезнут.
//Чтобы запустить в фотошопе надо писать так, пример:
//
//

var win, windowResource, i;
 
windowResource = "palette {  \    orientation: 'column', \    alignChildren: ['fill', 'top'],  \    preferredSize:[300, 130], \    text: 'ScriptUI Window - dialog',  \    margins:15, \    \    sliderPanel: Panel { \        orientation: 'row', \        alignChildren: 'right', \        margins:15, \        text: ' PANEL ', \        st: StaticText { text: 'Value:' }, \        sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] }, \        te: EditText { text: '30', characters: 5, justify: 'left'} \        } \    \    bottomGroup: Group{ \        cd: Checkbox { text:'Checkbox value', value: true }, \        cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \        applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \    }\}";
win = new Window(windowResource);
win.show();
 
app.documents.add(); // adds a new document
app.activeDocument.activeLayer.applyAddNoise (400, NoiseDistribution.GAUSSIAN, true) // applies Noise
for (i = 0; i < 3; i++) { // Blurs it 3 times
    app.activeDocument.activeLayer.applyGaussianBlur(1);
    $.sleep (2000); // waits 2 seconds
    app.refresh(); // refreshes PS
}

--------------------------------------------------------------------------------------------------------

//
//
// Вспомогательные функция, полезная дл дебага:
// According to one example's comment in the 
// Photoshop Javascript Reference:
// "A helper function for debugging
// It also helps the user see what is going on"

var waitForRedraw = function() {
  var d;
  d = new ActionDescriptor();
  d.putEnumerated(app.stringIDtoTypeID('state'), app.stringIDtoTypeID('state'), app.stringIDtoTypeID('redrawComplete'));
  return executeAction(app.stringIDtoTypeID('wait'), d, DialogModes.NO);
};

------------------------------------------------------------------------------------------------------------

//
//
// Полный рабочий метод сделать "палитру" в фотошопе.
// Взятый отсюда http://www.davidebarranca.com/2012/10/scriptui-window-in-photoshop-palette-vs-dialog/
//
//

var isDone, s2t, waitForRedraw, win, windowResource;
 
// Shortcut function
s2t = function(stringID) {
  return app.stringIDToTypeID(stringID);
};
 
waitForRedraw = function() {
  var d;
  d = new ActionDescriptor();
  d.putEnumerated(s2t('state'), s2t('state'), s2t('redrawComplete'));
  return executeAction(s2t('wait'), d, DialogModes.NO);
};
 
//sentinel variable
isDone = false;
 
windowResource = "palette {  \    orientation: 'column', \    alignChildren: ['fill', 'top'],  \    preferredSize:[300, 130], \    text: 'ScriptUI Window - palette',  \    margins:15, \    \    sliderPanel: Panel { \        orientation: 'row', \        alignChildren: 'right', \        margins:15, \        text: ' PANEL ', \        st: StaticText { text: 'Value:' }, \        sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] }, \        te: EditText { text: '30', characters: 5, justify: 'left'} \        } \    \    bottomGroup: Group{ \        cd: Checkbox { text:'Checkbox value', value: true }, \        cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] }, \        applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] }, \    }\}";
 
win = new Window(windowResource);
 
// Button listeners
win.bottomGroup.cancelButton.onClick = function() {
  return isDone = true;
};
win.bottomGroup.applyButton.onClick = function() {
  return isDone = true;
};
 
// don't forget this one!
win.onClose = function() {
  return isDone = true;
};
 
win.show();
 
while (isDone === false) {
  app.refresh(); // or, alternatively, waitForRedraw();
}

-------------------------------------------------------------------------------------------------------------------

//
//
// Более удобный способ держать палитры открытыми
// Основано на идее общения между CS-приложениями, взято тут http://www.davidebarranca.com/2012/11/scriptui-bridgetalk-persistent-window-examples/
//
//

#target photoshop
function winObject() {
  // Long resource String for 'palette' Window
  var windowResource = "palette {          orientation: 'column',         alignChildren: ['fill', 'top'],          preferredSize:[300, 130],         text: 'ScriptUI Window - palette',          margins:15,                 sliderPanel: Panel {             orientation: 'row',             alignChildren: 'right',             margins:15,             text: ' PANEL ',             st: StaticText { text: 'Value:' },             sl: Slider { minvalue: 1, maxvalue: 100, value: 30, size:[220,20] },             te: EditText { text: '30', characters: 5, justify: 'left'}             }                 bottomGroup: Group{             cd: Checkbox { text:'Checkbox value', value: true },             cancelButton: Button { text: 'Cancel', properties:{name:'cancel'}, size: [120,24], alignment:['right', 'center'] },             applyButton: Button { text: 'Apply', properties:{name:'ok'}, size: [120,24], alignment:['right', 'center'] },         }    }";
  var win = new Window(windowResource);
 
  win.bottomGroup.cancelButton.onClick = function() { win.close() };
  win.bottomGroup.applyButton.onClick = function() { win.close() };
 
  // Show the Window
  win.show();
};
 
// String message for BridgeTalk
var message = WinObject.toString();
 
// construct an anonymous instance and add it to the string
message += "\nnew WinObject();"
// $.writeln(message); // check it in the ESTK Console, just in case
 
var bt = new BridgeTalk();
bt.target = "photoshop";
bt.body = message;
bt.send();
