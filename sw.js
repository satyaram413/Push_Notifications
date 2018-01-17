self.addEventListener('install',function(event)
{
  console.log("Sw Installed at ", new Date().toLocaleTimeString());
  self.skipWaiting();

});
self.addEventListener('activate',function(event)
{
    console.log("Sw activate at ", new Date().toLocaleTimeString());

});
