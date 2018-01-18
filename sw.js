self.addEventListener('install',function(event)
{
  console.log("Sw Installed at ", new Date().toLocaleTimeString());
  self.skipWaiting();

});
self.addEventListener('activate',function(event)
{
    console.log("Sw activate at ", new Date().toLocaleTimeString());

});
self.addEventListener('notificationclick',function(event)
{

var notification=event.notification;
var action=event.action;
console.log(notification);
if (action === 'confirm')
{
    console.log('confirm was chosen');
   
    
}
else{
    console.log(action);
   
}
notification.close();
});
self.addEventListener('notificationclose',function(event)
{
console.log("Notification was closed",event);
});


// actions help in service worker? A notification is a systen feture its not a web feature, it is displayed by operating. Since service worker run in the background, therefore the notification actions has to work in the background only
