// 네트워크 우선, 실패하면 저장본 사용 (업데이트는 바로 반영, 오프라인에서도 열림)
const C="jades-diary-v1";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c)).catch(()=>{});return r}).catch(()=>caches.match(e.request)));
});
