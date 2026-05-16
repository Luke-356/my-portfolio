import { useState } from "react";

function Admin({
  projects,
  skills,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onAddSkill,
  onUpdateSkill,
  onDeleteSkill,
  onClose,
}) {
  const [projectForm, setProjectForm] = useState({
    Title: "",
    Ptag: "",
    link: "",
    image: "",
    languages: "",
  });
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [skillForm, setSkillForm] = useState({
    title: "",
    tags: "",
  });
  const [editingSkillId, setEditingSkillId] = useState(null);

  const resetProjectForm = () => {
    setProjectForm({ Title: "", Ptag: "", link: "", image: "", languages: "" });
    setEditingProjectId(null);
  };

  const resetSkillForm = () => {
    setSkillForm({ title: "", tags: "" });
    setEditingSkillId(null);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const nextProject = {
      id: editingProjectId || Date.now(),
      Title: projectForm.Title.trim() || "Untitled Project",
      Ptag: projectForm.Ptag.trim() || "Project description goes here.",
      link: projectForm.link.trim() || "#",
      image: projectForm.image.trim() || "https://via.placeholder.com/640x360?text=Project+Image",
      languages: projectForm.languages
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    if (editingProjectId) {
      onUpdateProject(nextProject);
    } else {
      onAddProject(nextProject);
    }

    resetProjectForm();
  };

  const startEditProject = (project) => {
    setEditingProjectId(project.id);
    setProjectForm({
      Title: project.Title,
      Ptag: project.Ptag,
      link: project.link,
      image: project.image,
      languages: project.languages.join(", "),
    });
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    const nextSkill = {
      id: editingSkillId || Date.now(),
      title: skillForm.title.trim() || "New Skill Category",
      tags: skillForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      icon: editingSkillId
        ? skills.find((skill) => skill.id === editingSkillId)?.icon || "code"
        : "code",
    };

    if (editingSkillId) {
      onUpdateSkill(nextSkill);
    } else {
      onAddSkill(nextSkill);
    }
    resetSkillForm();
  };

  const startEditSkill = (skill) => {
    setEditingSkillId(skill.id);
    setSkillForm({ title: skill.title, tags: skill.tags.join(", ") });
  };

  return (
    <div id="admin" className="bg-[#1E1E1E] py-16 px-8 lg6:px-4">
      <div className="max-w-[1279px] mx-auto text-white">
        <div className="flex items-center justify-between gap-4 mb-10 lg6:flex-col">
          <div>
            <h1 className="text-4xl font-semibold">Admin Panel</h1>
            <p className="mt-3 text-[#BDBDBD] max-w-2xl">
              Add, update, or delete your project and skill entries from the live
              portfolio data store.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-lightblue px-5 py-3 text-lightblue hover:bg-lightblue/10"
          >
            Close Admin
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <section className="bg-[#252525] rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <form onSubmit={handleProjectSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-[#BDBDBD]">Title</label>
                <input
                  value={projectForm.Title}
                  onChange={(e) => setProjectForm({ ...projectForm, Title: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Project name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#BDBDBD]">Description</label>
                <textarea
                  value={projectForm.Ptag}
                  onChange={(e) => setProjectForm({ ...projectForm, Ptag: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  rows={4}
                  placeholder="Project description"
                />
              </div>
              <div className="grid gap-4 sm1:grid-cols-1 md:grid-cols-2">
                <input
                  value={projectForm.link}
                  onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                  className="w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Repository URL"
                />
                <input
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  className="w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Image URL (optional)"
                />
              </div>
              <div>
                <label className="block text-sm text-[#BDBDBD]">Languages / Tags</label>
                <input
                  value={projectForm.languages}
                  onChange={(e) => setProjectForm({ ...projectForm, languages: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Python, React, SQL"
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  className="rounded-xl bg-lightblue px-6 py-3 text-black font-semibold hover:opacity-95"
                >
                  {editingProjectId ? "Update Project" : "Add Project"}
                </button>
                {editingProjectId && (
                  <button
                    type="button"
                    onClick={resetProjectForm}
                    className="rounded-xl border border-[#3B3B3B] px-6 py-3 text-white hover:bg-white/10"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            <div className="mt-10 space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="rounded-3xl border border-[#3B3B3B] bg-[#141414] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.Title}</h3>
                      <p className="text-sm text-[#BDBDBD] mt-2">{project.Ptag}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditProject(project)}
                        className="rounded-xl border border-lightblue px-3 py-2 text-lightblue hover:bg-lightblue/10"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        className="rounded-xl border border-red-500 px-3 py-2 text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#252525] rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <form onSubmit={handleSkillSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-[#BDBDBD]">Category</label>
                <input
                  value={skillForm.title}
                  onChange={(e) => setSkillForm({ ...skillForm, title: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Programming Languages"
                />
              </div>
              <div>
                <label className="block text-sm text-[#BDBDBD]">Skills / Tags</label>
                <input
                  value={skillForm.tags}
                  onChange={(e) => setSkillForm({ ...skillForm, tags: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#3B3B3B] bg-[#161616] px-4 py-3 text-white outline-none focus:border-lightblue"
                  placeholder="Python, React, SQL"
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  className="rounded-xl bg-lightblue px-6 py-3 text-black font-semibold hover:opacity-95"
                >
                  {editingSkillId ? "Update Skill" : "Add Skill"}
                </button>
                {editingSkillId && (
                  <button
                    type="button"
                    onClick={resetSkillForm}
                    className="rounded-xl border border-[#3B3B3B] px-6 py-3 text-white hover:bg-white/10"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            <div className="mt-10 space-y-4">
              {skills.map((skill) => (
                <div key={skill.id} className="rounded-3xl border border-[#3B3B3B] bg-[#141414] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {skill.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-[#212121] px-3 py-1 text-sm text-[#D8D8D8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditSkill(skill)}
                        className="rounded-xl border border-lightblue px-3 py-2 text-lightblue hover:bg-lightblue/10"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteSkill(skill.id)}
                        className="rounded-xl border border-red-500 px-3 py-2 text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Admin;
