const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque efficitur id felis non ultricies. 
    Quisque blandit bibendum purus, at viverra nibh vehicula in. 
    Nunc lorem nulla, faucibus nec nunc sed, porttitor pulvinar erat. 
    Praesent id sodales velit. Praesent varius eleifend turpis, eu tincidunt felis sagittis ut. Sed sodales hendrerit nisi, non cursus ipsum iaculis eget. Pellentesque interdum sem nibh, eu iaculis libero porta non. 
    In faucibus felis ut dui convallis dictum.`;

console.log(lorem.startsWith('Lorem'));
console.log(lorem.endsWith('dictum.'));
console.log(lorem.includes('efficitur'));
console.log(lorem.startsWith('ipsum', 6));


console.log('x'.repeat(3));
