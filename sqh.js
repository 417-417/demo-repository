class Role(db.Model):  
    id = db.Column(db.Integer, primary_key=True)  
    role_name = db.Column(db.String(80), unique=True, nullable=False)  
  
class User(db.Model):  
    id = db.Column(db.Integer, primary_key=True)  
    username = db.Column(db.String(80), unique=True, nullable=False)  
    password_hash = db.Column(db.String(128), nullable=False)  
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)  
    role = db.relationship('Role', backref=db.backref('users', lazy=True))  

