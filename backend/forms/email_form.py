from flask_wtf import FlaskForm
from wtforms import EmailField, SubmitField
from wtforms.validators import DataRequired, Email, Length


class EmailForm(FlaskForm):
    email = EmailField('Email', validators=[
        DataRequired(),
        Email(),
        Length(max=256)
    ], render_kw={
        "class": "body_copy w-input",
        "placeholder": "Your email...",
        "id": "email"
    })

    submit = SubmitField('', render_kw={
        "class": "submit-button w-button",
        "data-wait": ""
    })