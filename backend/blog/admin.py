from django.utils import timezone
from django.contrib import admin
from .models import Story, StoryClap, CommentClap, Comment, StorieView, Tag, StoryTag, StorieShare, TagFollower


#* Storyler içerisinde  commentleri de sergilemek için: 
class CommentInline(admin.TabularInline):
    model = Comment
    extra: 1
    classes = ('collapse',)
    # min_num = 3
    # max_num = 5

class ClapInline(admin.TabularInline):
    model = StoryClap
    classes = ('collapse',)

class StoryTagsInline(admin.TabularInline):
    model = StoryTag
    classes = ('collapse',)

class StoryViewsInline(admin.TabularInline):
    model = StorieView
    classes = ('collapse',)

class StoryShareInline(admin.TabularInline):
    model = StorieShare
    classes = ('collapse',)

# @admin.register(Story)
class StoryAdmin(admin.ModelAdmin):
    list_display = ("title",  "user", "status", "publish_date", "added_days_ago")
    list_editable = ("status", )
    list_display_links = ("user",)
    list_filter = ("status",)
    ordering = ("user",)
    # search_fields = ("Story__title",)
    list_per_page = 25
    date_hierarchy = "last_update"
    inlines = (CommentInline, ClapInline, StoryTagsInline, StoryViewsInline,StoryShareInline)

    def added_days_ago(self, story):
        fark = timezone.now() - story.publish_date
        return f"{fark.days} days ago"


admin.site.register(Story, StoryAdmin)
admin.site.register(Comment)
admin.site.register(StoryClap)
admin.site.register(CommentClap)
admin.site.register(StorieView)
admin.site.register(Tag)
admin.site.register(StoryTag)
admin.site.register(StorieShare)
admin.site.register(TagFollower)

admin.site.site_title = "Medium Clone"
admin.site.site_header = "Medium Clone Project Portal"
admin.site.index_title = "Welcome to Medium Clone Project Portal"
