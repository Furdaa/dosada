const contactTrack = document.querySelector(".marquee-slider");
const contactItems = Array.from(contactTrack.children);
contactItems.forEach((contactItem) => {
  const contactClone = contactItem.cloneNode(true);
  contactTrack.appendChild(contactClone);
});
