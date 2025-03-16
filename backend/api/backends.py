# backends.py
import ssl
from django.core.mail.backends.smtp import EmailBackend


class InsecureEmailBackend(EmailBackend):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)  # Initialize parent class
        self.connection_kwargs = {}  # Explicitly define if needed (optional)

    def open(self):
        if self.connection:
            return False

        # Create unverified SSL context
        context = ssl.create_default_context()
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE

        # Connect with insecure context
        self.connection = self.connection_class(
            self.host,
            self.port,
            **self.connection_kwargs  # Now properly initialized
        )
        self.connection.starttls(context=context)
        self.connection.login(self.username, self.password)
        return True