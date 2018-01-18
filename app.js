var enablenotification=document.querySelector('.pushbutton');
if(!window.Promise)
{
    window.Promise=Promise;
}
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js').then(function()
{
console.log("Service worker registered");
}).catch(function(err)
{
console.log(err);
});
}
/*
window.addEventListener('beforeinstallprompt',function(event)
{ 
    console.log("beforeinstallprompt fired");
    //preventDefault does not take any arguments
    event.preventDefault();
    defserredPrompt=event;
    return false;
});*/

function displayconfirmnotification()
{
    // console.log("Right Here");
    if('serviceWorker' in navigator)
    {
        var options={
            body: "Successfully Subscribed Sweety",
            icon:'/images/icons/app-icon-96x96.png',
            image:'/images/sf-boat.jpg',
            dir:'ltr',
            lang:'en-US', //BCP 47
            vibrate:[100,50,200],
            //tag will reduce redundancy i.e if a notification is repetitive then it wont show to user multiple times.
//renotify will vibrate the phone, but no new notification will be dispalayed 
            tag:'confirm-notification',
            badge:'/images/icons/app-icon-96x96.png',
            renotify:true,
            actions:[
                {
                    action: 'confirm',
                    title:'Okay',
                    icon:'/images/icons/app-icon-96x96.png'
                },
                {
                action: 'Cancel',
                title:'Cancel',
                icon:'/images/icons/app-icon-96x96.png'
                }
            ]
        };
      
navigator.serviceWorker.ready
.then(function(swreg)

{
swreg.showNotification("Successfully Subscribed (from SW) ",options);
});
    }/*
    var options={
        body:"Successfully Subscribed Sweety"
    };
    new Notification("Successfully Subscribed",options);
*/
}
function askforNotificationPermission()
{
 
    Notification.requestPermission(function(result)
{
    console.log("User Choice",result);
    if(result!=="granted")
    {
        console.log("No Notification Permission granted");
    }
    else{
        displayconfirmnotification();
    }
});
}
if('Notification' in window)
{
    
        enablenotification.addEventListener('click',askforNotificationPermission);
        
    
}
