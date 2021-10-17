import {ref} from 'vue'

// const screenSide = {left:true, right:true}
// Object.freeze(screenSide)

const dockStyle = ref({
    top     :   0,
    left    :   0,
    width   :   0,
    height  :   0,
})

const ripple = ref({
    active  :   false,
    top     :   100,
    left    : 100,
})

const enableAnimations = ref(false)

const windows = ref({
    'skills' : {
        title       :   'Skills',
        loaded      :   false,
        minimized   :   false,
        active      :   false,
        stuckToSide :   false,
        stuckWhere  :   'left',
        maximized   :   false,
        isMaximizable : true,
        zIndex      :   1,
        width   :   window.innerWidth  * (3/8),
        height  :   window.innerHeight  * (8/13),
        opacity :   1,
        top     :   Math.floor(Math.random() * ((window.innerHeight - (window.innerHeight  * (8/13) + 100)) - 100) + 100),
        left    :   Math.floor(Math.random() * ((window.innerWidth - (window.innerWidth  * (3/8) + 100)) - 100) + 100),
    },
    'who' : {
        title       :   'Who?',
        loaded      :   true,
        minimized   :   false,
        active      :   false,
        position    :   [0,0],
        stuckToSide :   false,
        stuckWhere  :   'left',

        maximized   :   false,
        isMaximizable : true,
        zIndex      :   1,
        width   :   window.innerWidth  * (3/8),
        height  :   window.innerHeight  * (8/13),
        opacity :   1,
        top     :   Math.floor(Math.random() * ((window.innerHeight - (window.innerHeight  * (8/13) + 100)) - 100) + 100),
        left    :   Math.floor(Math.random() * ((window.innerWidth - (window.innerWidth  * (3/8) + 100)) - 100) + 100),
    },    
    'projects' : {
        title       :   'Projects',
        loaded      :   false,
        minimized   :   false,
        active      :   false,
        position    :   [0,0],
        stuckToSide :   false,
        stuckWhere  :   'left',
        maximized   :   false,
        isMaximizable : true,
        zIndex      :   1,
        width   :   window.innerWidth  * (3/8),
        height  :   window.innerHeight  * (8/13),
        opacity :   1,
        top     :   Math.floor(Math.random() * ((window.innerHeight - (window.innerHeight  * (8/13) + 100)) - 100) + 100),
        left    :   Math.floor(Math.random() * ((window.innerWidth - (window.innerWidth  * (3/8) + 100)) - 100) + 100),
    },
    'contact' : {
        title       :   'Contact',
        loaded      :   false,
        minimized   :   false,
        active      :   false,
        position    :   [0,0],
        stuckToSide :   false,
        stuckWhere  :   'left',
        maximized   :   false,
        isMaximizable : true,
        zIndex      :   1,
        width   :   window.innerWidth  * (3/8),
        height  :   window.innerHeight  * (8/13),
        opacity :   1,
        top     :   Math.floor(Math.random() * ((window.innerHeight - (window.innerHeight  * (8/13) + 100)) - 100) + 100),
        left    :   Math.floor(Math.random() * ((window.innerWidth - (window.innerWidth  * (3/8) + 100)) - 100) + 100),
    },   
    'game' : {
        title       :   'Flappy Bird',
        loaded      :   true,
        minimized   :   false,
        active      :   true,
        position    :   [0,0],
        stuckToSide :   false,
        stuckWhere  :   'left',
        maximized   :   false,
        isMaximizable : false,
        zIndex      :   1,
        width   :   320,
        height  :   480 + 24,
        opacity :   1,
        top     :   Math.floor(Math.random() * ((window.innerHeight - (window.innerHeight  * (8/13) + 100)) - 100) + 100),
        left    :   Math.floor(Math.random() * ((window.innerWidth - (window.innerWidth  * (3/8) + 100)) - 100) + 100),
    },
})

const ZIndexMax = (Object.keys(windows.value).length);
var windowIndices = (Object.keys(windows.value).map(window => window))

function setWindowIndexMax(window){
    // console.log(`set max index: ${window}`)
    windowIndices.splice(windowIndices.indexOf(window),1)
    windowIndices.splice(ZIndexMax, 0 , window)
    for(const xwindow in windows.value){
        windows.value[xwindow].zIndex = windowIndices.indexOf(xwindow) + 1
    }
}

// setWindowIndexMax('who')

function setWindowState(window,state){
    console.log(state)
    if (state == 'maximized'){
        windows.value[window].maximized = true
        windows.value[window].stuckToSide = false
    }else if (state == 'stuckToSide'){
        windows.value[window].maximized = false
        windows.value[window].stuckToSide = true
    }else if (state == 'normal'){
        windows.value[window].maximized = false
        windows.value[window].stuckToSide = false
    }else if (state == 'killed'){
        windows.value[window].active        = false
        windows.value[window].minimized     = false
        windows.value[window].maximized     = false
        windows.value[window].stuckToSide   = false
    }else if(state == 'minimized'){
        windows.value[window].zIndex = 1
        windows.value[window].minimized = true
    }else if(state == 'open' && !windows.value[window].active){
        setWindowIndexMax(window)
        windows.value[window].active = true
    }else if(state == 'restore'){
        setWindowIndexMax(window)
        windows.value[window].minimized = false
    }
}

function setLocalStorage(){
    console.log('settign local storage')
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname"); 
}

export {
    ripple,
    windows,
    setWindowState,
    dockStyle,
    setLocalStorage,
    setWindowIndexMax,
    enableAnimations
}

