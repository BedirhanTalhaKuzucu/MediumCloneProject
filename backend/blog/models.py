from django.db import models
from django.contrib.auth.models import User
import uuid


class Tag(models.Model):
    
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    tag_name = models.CharField(max_length=15, default= 'BackEnd' )
    def __str__(self):
        return self.tag_name


class Story(models.Model):
    STATUS = (
        ("Published", "Published"),
        ("Draft", "Draft"),
    )
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField()
    content = models.TextField()
    image = models.ImageField(upload_to='storie_image',blank=True,default='default/mediaDefaultImage.jpg')
    publish_date = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)
    status = models.CharField(choices = STATUS, max_length=10, default='Draft')
    tags=models.ManyToManyField(Tag, through='StoryTag',through_fields=('story','tag'))
    # !serializerda
    #  tag
    # claps
    # comment
    
    def __str__(self):
        return f'{self.title}------------ {self.user} {self.tags}'
    class Meta:
        verbose_name_plural = "Stories"    

    # def comment_count(self):
    #     return self.comment_set.all().count()

    # def comments(self):
    #     return self.comment_set.all()



 

class TagFollower(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    tag=models.ForeignKey(Tag,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timeStamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'{self.tag}-{self.user.username}'

class StoryTag(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    tag=models.ForeignKey(Tag,on_delete=models.CASCADE,related_name='tags')
    story=models.ForeignKey(Story,on_delete=models.CASCADE,related_name='story')
    timeStamp = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    content = models.TextField(max_length=300)
    created_date = models.DateTimeField(auto_now_add=True)
    last_update =models.DateTimeField(auto_now=True)
    # !serializerda
    # claps

    def __str__(self):
        return f'{self.story.title}======={self.user.username}'

class StoryClap(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='story_clap_user')
    story = models.ForeignKey( Story, on_delete=models.CASCADE, related_name='clap_story',blank=True,null=True)
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} => {self.story}" 


class CommentClap(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='comment_clap_user')
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='clap_comment',blank=True,null=True)
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}" 

class StorieView(models.Model):
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    timeStamp = models.DateTimeField(auto_now_add=True)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"[ {self.timeStamp} ]" 

class StorieShare(models.Model):
    SHARE=(
        ('Twitter','Twitter'),
        ('Facebook','Facebook'),
        ('LinkedIn','LinkedIn'),

    )
    id=models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    timeStamp = models.DateTimeField(auto_now_add=True)
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    share=models.CharField(max_length=10, choices =SHARE)

    class Meta:
        verbose_name_plural = "Story Share"

