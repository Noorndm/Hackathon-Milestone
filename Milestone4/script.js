document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeDisplay = document.getElementById("resume-display");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
      
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var education = document.getElementById("education").value;
        var skill = document.getElementById("skill").value;
        var experience = document.getElementById("experience").value;
        var photoInput = document.getElementById("photo");
   
        resumeDisplay.innerHTML = "\n            <h2 contenteditable=\"true\">".concat(name, "</h2>\n            <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skill, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        ");
        // photo upload
        if (photoInput.files && photoInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var imgElement = document.createElement("img");
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                imgElement.style.width = "150px";
                imgElement.style.height = "150px";
                imgElement.style.borderRadius = "50%";
                resumeDisplay.insertBefore(imgElement, resumeDisplay.firstChild);
            };
            reader.readAsDataURL(photoInput.files[0]);
        }
        else {
            console.error("No photo selected");
        }
    });
});
