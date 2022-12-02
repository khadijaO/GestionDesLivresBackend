class AutoritiesController {
static async allAccess (req, res)  {
    res.status(200).send("Public Content.");
  };
  
  static async  userBoard  (req, res)  {
    res.status(200).send("User Content.");
  };
  
  static async  adminBoard  (req, res) {
    res.status(200).send("Admin Content.");
  };
  
  static async  moderatorBoard  (req, res) {
    res.status(200).send("Moderator Content.");
  };

}
module.exports = AutoritiesController