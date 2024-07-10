from django.urls import path
from .views import TaskListCreateView, MarkCompletedView, DeleteTaskView

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/mark/<int:pk>/', MarkCompletedView.as_view(), name='mark-completed'),
    path('tasks/delete/<int:pk>/', DeleteTaskView.as_view(), name='delete-task'),
]
