const getUser = async () => {
    
  let username = document.getElementById("input").value;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (data.message == "Not Available") {
    alert(data.message);
  } 
  else {
    document.getElementById("accountinfo").innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img class="profile-image-icon" src="${data.avatar_url}" />
            </div>
            <div class="profile-details">
                <h2 class="name">${data.name}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${data.bio ? data.bio : "Bio not available"}</p>

                <div class="info">
                    <div>
                        <div class="info-name">Public Repos</div>
                        <div class="info-name">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="info-name">Followers</div>
                        <div class="info-name">${data.followers}</div>
                    </div>
                    <div>
                        <div class="info-name">Following</div>
                        <div class="info-name">${data.following}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
};
