```javascript
// myComponent.js
<div className="bg-gray-200 p-4 rounded-lg">
  <h2 className="text-xl font-bold mb-2">My Component</h2>
  <p>Some content here...</p>
</div>
```
This component renders correctly, but when I try to add a Tailwind class like `bg-blue-500`, nothing changes. The background color remains gray.  I've checked my `tailwind.config.js` and confirmed that the `content` array includes the paths to my component files. I've also tried restarting the development server and cleaning the cache, to no avail.