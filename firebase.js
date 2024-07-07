import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "blog-app-98f62",
    "private_key_id": "ed746b3bfe73259da2f7cb9bd95fa0956e7df681",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfoYYbPPSjxnUx\nnokyCrpF/+EW99ZR75tyGbmW+WhcdWUTkdYGLI5YJxlAl3StkmiULCFNvG+qif8R\ndaBfE3KUofbZVUpkLlx2TQYWKEaTZBK4qg5dirAM//UusKVuOGSALeex2DOlrYrs\nk7MbAxvumPDgXNyyvvz5XRYGmryZwRkZQCYr0BHYZwIAKzJggATeKVjzmqxVWmRV\nEQjR/1XjUq+Tc6B1/7J1tMxpyD/6dvbjaulPlcGGJ2idVxJ1xRg8/Zo8VeiLIeYf\nG33oLC7Kw2Tq1RikTG4mH3h+WPCpsiYRQtQ01d7zEH4dfwQVkWTh28Mhw8dT633h\nwRkSWDgBAgMBAAECggEAD0p76+KGJaUGR1tCFZzQ9JEa+OYDLeSXnZGoxTU9YbPu\nG3aKC5vbg8a1BMqtRs4iPeVPSGC/SpT+7ad4lfrpLCMqn+1rW5bUTRG6Pkeb4RUC\nNRW3HA9Dp28iR5dstVbqC5w6GD9XTSzHRLuuOa1t0MhuNHO4wVeJqIJZ8IaEf+7I\nKoWqUGC1rTo2EGUzNzszkJ26ZrCmxCAxY3HLu8O406QQDXBxBMkzysuUqrkOY96E\nosxB66ernTkISAxfk56prt2C3RRWODvVwEiu2b23ps6HEq3nb+XI/lnDFduWWcwU\nRV59l04aFOi/K7eMVAgRYDGag+6GhtwQg4W76PlvdQKBgQDdfG3yU+r2kfG5eiIF\ncqeWF7q6+wTI8Pip6PjU/cF6Fhge/OAOVspVV7eNsKWuxqC5OArua8W1Syxq6By1\n7usyGafkjociWba7ApZCeHhQ+9273BLp9wzRMj4GMBLJk0gvjrgrOEXhjeKHjqA1\nY05JiK8rz6YqBv3lBBetriR0/QKBgQC4gY6bn73LHdjNeAHfHY9n6+f8FPxjTeoK\nm8Hynv8QxNfPimTcN9mt5nvtJImkPTWnORimFV2XODYxE25j6HS8Bb3j+s+BlvyO\nX2kpG/sM6sW8QY9Q6JfaXDadrfHQNnV1tjVFR7sGw4S3kPjC6HDyNkyAlcbHAwhv\nUZtK12DgVQKBgQDa3DHo23O64sxx83Xa3Ektz5T9Xz6DMVsGyufX0Eh3U43SUR82\nDB0z59HBeWS/KBd57x8eKfDcDMR/f42fWc+fWirFdvGhx/UBJrVESbbaj4e0Muud\ntjo8HeGcS7TE63zRQb5LNvgWwhWuzgkRuGeL0j0GldIkhXQt8bVUMlhkIQKBgH4s\nUuqHndHWElnIVHdQjq4BfD49167NLFye0U3qfwDnq7GIsZqLMvgiIuMz1lCTbypw\n+DMzbzInRZ/f6uC1qYae4pGSBe9X4lQ2WQK82LynnBs2NhydQqMX5l2EA1Zgt4iM\n1vcOq45fjFW/9O3M6NgqW7yfMDUOFOmTRAA1M1GVAoGAWx6fNM/Az0B8Ek/iZMvh\nsMrA4GyBa4uQNHSAb0I56hmqozSxTu90rq00WHGvS62gx+E6517whwiiCjVYLjDK\n2bKII2+BZnOzTQNpy8x6TNCYLPgcNEPFBKR1rFZmPww7b3XQT3xtO/W9/1/7PrXj\n4DEpn7P+/Rlb7Tj5QZ5XewM=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-vuo71@blog-app-98f62.iam.gserviceaccount.com",
    "client_id": "117736569225682363385",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vuo71%40blog-app-98f62.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }),
});

 export const adminAuth = admin.auth();

