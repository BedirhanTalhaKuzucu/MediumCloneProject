from email.policy import default
from django.db import models
from django.contrib.auth.models import User
import uuid


class UserProfile(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user= models.OneToOneField(User, on_delete=models.CASCADE,related_name='userfor')
    name=models.CharField(max_length=50,blank=True)
    short_bio=models.CharField(max_length=160,blank=True)
    profile_photo=models.ImageField(upload_to='profile_photo',blank=True, default= 'default/default.jpg')
    about_text=models.TextField(blank=True)
    about_photo=models.ImageField(upload_to='about_photo',blank=True)
    last_update=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.user}'



class Following(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    follower=models.ForeignKey(User,on_delete=models.CASCADE,related_name='followed_user')
    followed=models.ForeignKey(User,on_delete=models.CASCADE)
    timeStamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'takip eden => {self.follower}- takip edilen =>{self.followed}'
    
    class Meta:
        verbose_name_plural = "Following"
        unique_together = ('follower', 'followed')