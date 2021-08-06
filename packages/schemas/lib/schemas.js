'use strict';

const { CourseSchema } = require('./courses/course-schema');
const { CoursesSchema } = require('./courses/courses-schema');
const { ProjectSchema } = require('./projects/project-schema');
const { ProjectsSchema } = require('./projects-schema');
const { RepoSchema } = require('./repos/repo');
const { ReposSchema } = require('./repos/repos');

module.exports = {
    discovery: {
        courses: CoursesSchema,
        course: CourseSchema,
        projects: ProjectsSchema,
        project: ProjectSchema,
        repos: ReposSchema,
        repo: RepoSchema,
    }
};