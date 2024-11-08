document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skill = (document.getElementById("skill") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const photoInput = document.getElementById("photo") as HTMLInputElement;

        resumeDisplay.innerHTML = `
            <h2 contenteditable="true">${name}</h2>
            <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>
            <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Skills</h3>
            <p contenteditable="true">${skill}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
        `;

        //  photo upload
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgElement = document.createElement("img");
                imgElement.src = e.target?.result as string;
                imgElement.style.width = "150px";
                imgElement.style.height = "150px";
                imgElement.style.borderRadius = "50%";
                resumeDisplay.insertBefore(imgElement, resumeDisplay.firstChild);
            };
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            console.error("No photo selected");
        }
    });
});
