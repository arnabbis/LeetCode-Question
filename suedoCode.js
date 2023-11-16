// Customer Model newKey Login Type = "Password Login " || "Google Authentication Login";

// For pasword Login SetUp if customer has pasword set the login as Password Login 

if(customerData.password){
    loginType = "password Login"
}

// And we have to add three new key value in the schema
let newFields = {
            googleId: profile.id,
              googleAccessToken: accessToken,
              googleRefreshToken: refreshToken,
}
// Now Setting google authentication - 

// 1. credentails for the google develop to access like google-secretkey , clientid
//  2. passport google authentication 
//  3. setting the oauth for login 

passport.use(
    new GoogleStrategy(
      {
        clientID: 'YOUR_GOOGLE_CLIENT_ID',
        clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        // Use your Mongoose model here to find or create a user
        CustomerModel.findOne({ googleId: profile.id }, (err, existingUser) => {
          if (existingUser) {
            // Update the existing user's data
            existingUser.googleAccessToken = accessToken;
            existingUser.googleRefreshToken = refreshToken;
            existingUser.save((err) => {
              done(err, existingUser);
            });
          } else {
            // Create a new user
            const newUser = new CustomerModel({
              googleId: profile.id,
              googleAccessToken: accessToken,
              googleRefreshToken: refreshToken,
              // ... other user data
            });
            newUser.save((err) => {
              done(err, newUser);
            });
          }
        });
      }
    )
  );

  
// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  // Google OAuth callback route
  router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    // Redirect or respond as needed
  });
  

//  Login Schenario:- 

// check with the field Login Type:-

if(LoginType = "emailType"){
    // go with the as usaual authentication 
}else{
    if(loginType = "google Authentication"){
        // throw a error that authentication not possible because user is authenticated with google 
    }
}

//  Conditions : - 

//  1. For a new user to authenticate with google login handles by the passport
//  2. For an existing user to authenticate with google login handles by the passport

// Login scenarion : - 

// If customer has pasword set the login as Password Login and will give error if want to 