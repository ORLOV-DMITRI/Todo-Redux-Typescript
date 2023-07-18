/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../../../types/global";
import {
  DeleteCommentType,
  NewCommentType,
  UpdatedCommentType,
} from "../../../types/store/tasks";

type TaskState = {
  list: TaskType[];
};

const initialState: TaskState = {
  list: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<{ newTask: TaskType }>) => {
      state.list.push(payload.newTask);
    },
    deleteTask: (state, { payload }: PayloadAction<{ id: string }>) => {
      const filteredTasks = state.list.filter((task) => task.id !== payload.id);
      state.list = [...filteredTasks];
    },
    updateTask: (state, { payload }: PayloadAction<TaskType>) => {
      state.list.filter((task) => {
        if (task.id === payload.id) {
          task.title = payload.title;
          task.description = payload.description;
          task.column = payload.column;
        }
      });
    },
    toggleActiveTask: (state, { payload }: PayloadAction<{ id: string }>) => {
      const task = state.list.find((task) => task.id === payload.id);
      if (!task) {
        return;
      }
      task.isActive = !task.isActive;
    },
    addComment: (state, { payload }: PayloadAction<NewCommentType>) => {
      if (payload.comment.text === "") {
        return;
      }
      const task = state.list.find((task) => task.id === payload.id);
      task?.comments.push(payload.comment);
    },
    updateComment: (state, { payload }: PayloadAction<UpdatedCommentType>) => {
      if (!payload.text) {
        return;
      }
      const task = state.list.find((task) => task.id === payload.taskId);
      const comment = task?.comments.find(
        (comment) => comment.id === payload.commentId
      );
      if (!comment) {
        return;
      }
      comment.text = payload.text;
    },
    deleteComment: (state, { payload }: PayloadAction<DeleteCommentType>) => {
      const task = state.list.find((task) => task.id === payload.taskId);
      if (!task) {
        return;
      }
      const filteredComments = task.comments.filter(
        (comment) => comment.id !== payload.commentId
      );

      task.comments = [...filteredComments];
    },
  },
});

export const actions = taskSlice.actions;

export default taskSlice.reducer;
