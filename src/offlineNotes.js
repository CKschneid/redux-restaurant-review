// import throttle from 'lodash/throttle'
// test with chrome canary
// will need conditionals added to fetch calls
// if date already exists in store, call will be redundant
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
    }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

const persistedState= loadState()
const store = createStore( rootReducer,
                           persistedState
)

// can pick out slices of store that should be persisted (e.g. don't persist ui state)
store.subscribe( () => {
  throttle(saveState({
    todos: store.getState().todos
  }), 1200)
})

// v4 is used to adress
//... pass store to <Provider .../>
// in first line of javascript, register service worker

if( 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js')
  //path relative to origin
    .then( reg => {
        console.log('Registration suceeded.')
    }).catch( error => {
      console.log('Registration failed with', error)
    })
}

// service worker registers -> browser will attempt to activate sw for site
// install event fires when install is successfully completed
// install event used to populate browser's offline caching with assets needed for offline

// in sw.js file
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then( cache => {
      return cache.addAll([
        '/index.html',
        '/bundle.js',
        '/main.css'
      ])
    })
  )
})

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
            .then( response => {
              return response || fetch(event.request)
// easy to add aditional chain where resource not contained within cache is automatically pushed to cache
// can add a fallback at end if not in cache and offline
// in this case we could display a .pdf timetable
            })
  )
})

// two ways for same thing... could populate the cache with the actual JSON
// or we could use cache only for assets and leave data portion to
// dont wanna fuck with indexDB directly
// look into other options that abstract over indexDB
// code splitting and route-based chunking are advanced areas for increased performance
// also can switch async calls directly to the <Link /> component
