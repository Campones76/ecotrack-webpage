from flask import Blueprint, render_template, request, flash

from backend.forms.email_form import EmailForm

landingpage_bp = Blueprint('landingpage', __name__)


@landingpage_bp.route('/', methods=['GET', 'POST'])
def landing():
    form = EmailForm()  # Create an instance of the form
    success = False
    error = False

    if form.validate_on_submit():
        # Process the email here (e.g., store in database or send an email)
        email = form.email.data
        print(f"Email received: {email}")
        success = True
    elif request.method == 'POST':
        # If the form submission fails validation
        error = True

    return render_template('landingpage.html', form=form, success=success, error=error)